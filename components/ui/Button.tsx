import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "base" | "large";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-orange text-text-primary border border-transparent hover:brightness-110 active:brightness-95",
  secondary:
    "bg-surface text-text-primary border border-border hover:bg-bg active:bg-surface",
  danger:
    "bg-loss text-text-primary border border-transparent hover:brightness-110 active:brightness-95"
};

const sizeClasses: Record<ButtonSize, string> = {
  base: "h-10 px-4 text-sm",
  large: "h-12 px-5 text-base"
};

export function Button({
  variant = "primary",
  size = "base",
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon ? <span className="inline-flex h-5 w-5 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}

