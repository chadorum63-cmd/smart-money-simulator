import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-xl border border-border bg-surface text-text-primary",
        className
      )}
      {...props}
    />
  );
}

