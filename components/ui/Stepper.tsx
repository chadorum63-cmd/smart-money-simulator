import * as React from "react";

export type StepperProps = {
  steps: string[];
  currentStep: number; // 0-based
  className?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <ol className={cx("space-y-3", className)}>
      {steps.map((label, idx) => {
        const isDone = idx < currentStep;
        const isActive = idx === currentStep;

        return (
          <li key={`${label}-${idx}`} className="flex items-start gap-3">
            <div
              className={cx(
                "mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                isDone && "border-profit bg-profit text-text-primary",
                isActive && "border-accent-orange bg-accent-orange text-text-primary",
                !isDone && !isActive && "border-border bg-bg text-text-muted"
              )}
              aria-hidden="true"
            >
              {idx + 1}
            </div>

            <div className="min-w-0">
              <div
                className={cx(
                  "text-sm font-semibold leading-6",
                  isActive && "text-text-primary",
                  isDone && "text-text-secondary",
                  !isDone && !isActive && "text-text-muted"
                )}
              >
                {label}
              </div>
              {isActive ? (
                <div className="text-xs leading-5 text-text-muted">
                  Текущий шаг
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

