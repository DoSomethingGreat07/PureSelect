import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen py-24">
      <Container className="section-surface rounded-[2rem] p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--earth)]">404</p>
        <h1 className="mt-4 font-[var(--font-heading)] text-5xl">Page not found</h1>
        <p className="mt-4 text-base text-[var(--muted)]">
          The page you are looking for does not exist. Head back to the homepage to continue
          exploring Pure Select.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white"
        >
          Return home
        </Link>
      </Container>
    </main>
  );
}
