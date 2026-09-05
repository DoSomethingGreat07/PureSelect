import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";
// Exercise the actual route and validation with email and captcha fully mocked.
const requireLocal = createRequire(import.meta.url);
const sent = [];
let failAt = 0;
let captchaOK = true;
const transport = {
  async sendMail(message) {
    if (sent.length + 1 === failAt) throw new Error("Simulated SMTP failure");
    sent.push(message);
    return { accepted: [message.to] };
  }
};

function load(file) {
  const fixtureModule = { exports: {} };
  const source = fs.readFileSync(file, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true
    }
  }).outputText;
  const resolve = (name) => {
    if (name === "nodemailer") return { createTransport: () => transport };
    if (name === "next/server") {
      return { NextResponse: { json: (body, options) => Response.json(body, options) } };
    }
    if (name.startsWith("@/")) return load(path.resolve("src", name.slice(2) + ".ts"));
    return requireLocal(name);
  };
  new Function("require", "module", "exports", compiled)(resolve, fixtureModule, fixtureModule.exports);
  return fixtureModule.exports;
}

Object.assign(process.env, { SMTP_HOST: 'smtp.example.com', SMTP_USER: 'care@pureselect.in', SMTP_PASS: 'test-only' });
delete process.env.SMTP_FROM_EMAIL;
delete process.env.ENQUIRY_TO_EMAIL;
delete process.env.TURNSTILE_SECRET_KEY;
global.fetch = async () => Response.json({ success: captchaOK });
const { POST } = load('src/app/api/enquiry/route.ts');
const { initialEnquiryValues, enquirySchema } = load('src/lib/form.ts');
const valid = { ...initialEnquiryValues, fullName: 'Test Customer', organization: 'Test Grocery', mobileNumber: '9876543210', email: 'customer@example.com', state: 'Telangana', city: 'Hyderabad', exactAddress: '123 Market Road Hyderabad', productRequirement: 'Other', otherProductRequirement: 'Rice & <millet>', estimatedQuantity: '500kg', formStartedAt: Date.now() - 10000 };
const submit = data => POST(new Request('http://localhost/api/enquiry', { method: 'POST', body: JSON.stringify(data) }));
test("enquiry delivery, validation, product options, and captcha", async () => {
    let res = await submit(valid);
    assert.equal(res.status, 200);
    assert.equal((await res.json()).confirmationSent, true);
    assert.equal(sent.length, 2);
    assert.equal(sent[0].to, 'pureselectenterprises@gmail.com');
    assert.equal(sent[0].replyTo, 'customer@example.com');
    assert.ok(sent.every(message => message.from === 'Pure Select <care@pureselect.in>'));
    assert.equal(sent[1].to, 'customer@example.com');
    assert.equal(sent[1].replyTo, 'pureselectenterprises@gmail.com');
    assert.ok(sent.every(m => m.text.includes('Rice & <millet>') && m.html.includes('Rice &amp; &lt;millet&gt;')));
    console.log('PASS: both emails, intended business recipient, reply addresses, Other details and HTML escaping');
    for (const patch of [{ otherProductRequirement: '' }, { email: 'invalid' }, { mobileNumber: '123' }, { city: 'Bengaluru' }, { website: 'bot' }, { formStartedAt: Date.now() }]) {
        sent.length = 0;
        res = await submit({ ...valid, ...patch });
        assert.equal(res.status, 400);
        assert.equal(sent.length, 0);
    }
    console.log('PASS: invalid input, mismatched city, honeypot and timing protection');
    for (const product of ['Raw Peanuts', 'Roasted Chana Dal', 'Rajma Chitra', 'Toor Dal', 'Moong Dal', 'Chana Dal', 'Urad Dal', 'Whole Chana', 'Rice', 'Poha (Flattened Rice)', 'Idli Rava', 'Puffed Rice', 'Roasted Peanuts', 'Soya Chunks / Meal Maker'])
        assert.equal(enquirySchema.safeParse({ ...valid, productRequirement: product, otherProductRequirement: '' }).success, true);
    console.log('PASS: all 14 named product choices accepted');
    sent.length = 0;
    failAt = 1;
    res = await submit(valid);
    assert.equal(res.status, 500);
    assert.equal(sent.length, 0);
    assert.ok(!(await res.json()).message.includes('Simulated SMTP failure'));
    failAt = 2;
    res = await submit(valid);
    assert.equal(res.status, 200);
    assert.equal((await res.json()).confirmationSent, false);
    assert.equal(sent.length, 1);
    console.log('PASS: business send failure stays an error; customer confirmation failure preserves successful enquiry');
    failAt = 0;
    sent.length = 0;
    process.env.TURNSTILE_SECRET_KEY = 'test-only';
    res = await submit(valid);
    assert.equal(res.status, 400);
    captchaOK = false;
    res = await submit({ ...valid, turnstileToken: 'test' });
    assert.equal(res.status, 400);
    assert.equal(sent.length, 0);
    captchaOK = true;
    res = await submit({ ...valid, turnstileToken: 'test' });
    assert.equal(res.status, 200);
    console.log('PASS: missing, rejected and successful captcha paths');
    sent.length = 0;
    delete process.env.TURNSTILE_SECRET_KEY;
    res = await submit({ ...valid, fullName: "Ravi O'Neil" });
    assert.equal(res.status, 200);
    assert.ok(sent.every(message => !message.html.includes("Ravi O'Neil") && message.html.includes('Ravi O&#39;Neil')));
    delete process.env.SMTP_PASS;
    sent.length = 0;
    res = await submit(valid);
    assert.equal(res.status, 500);
    assert.equal(sent.length, 0);
    assert.ok(!(await res.json()).message.includes('SMTP'));
    console.log('PASS: escaped customer names and missing business credentials');
    console.log('All tests used a mocked email transport and mocked captcha. No messages sent.');
});
