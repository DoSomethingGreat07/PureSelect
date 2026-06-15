"use client";

import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "accent";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const baseStyles =
  "focus-ring relative isolate inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-semibold leading-none transition duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-[var(--primary)] !text-[var(--cream)] shadow-[0_16px_30px_rgba(18,53,36,0.22)] hover:-translate-y-0.5 hover:bg-[var(--primary-soft)]",
  secondary:
    "border border-[var(--border)] bg-[rgba(255,250,240,0.82)] !text-[var(--primary)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--cream)]",
  ghost: "!text-[var(--primary)] hover:text-[var(--earth)]",
  light:
    "bg-[var(--cream)] !text-[var(--primary)] shadow-[0_16px_28px_rgba(18,53,36,0.16)] hover:-translate-y-0.5 hover:bg-white",
  accent:
    "bg-[var(--accent)] !text-[var(--primary)] shadow-[0_16px_28px_rgba(199,156,58,0.24)] hover:-translate-y-0.5 hover:bg-[#d3aa4e]"
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  target,
  rel
}: Readonly<ButtonProps>) {
  const classes = cn(baseStyles, variants[variant], className, disabled && "cursor-not-allowed opacity-60");
  const isInternalHref = href?.startsWith("/") || href?.startsWith("#");

  if (href) {
    if (!isInternalHref) {
      return (
        <a href={href} className={classes} target={target} rel={rel} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
