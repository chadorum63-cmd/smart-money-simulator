import * as React from "react";

export type ChartPlaceholderProps = {
  className?: string;
  title?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ChartPlaceholder({ className, title = "График" }: ChartPlaceholderProps) {
  return (
    <div
      className={cx(
        "w-full overflow-hidden rounded-xl border border-border bg-surface",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="text-xs font-semibold tracking-tight text-text-secondary">
          {title}
        </div>
        <div className="text-xs font-mono text-text-muted">OHLC</div>
      </div>

      <div className="p-4">
        <svg
          viewBox="0 0 640 320"
          className="h-[52vh] min-h-[320px] w-full"
          role="img"
          aria-label="Заглушка графика с осями и сеткой"
        >
          <rect x="0" y="0" width="640" height="320" fill="transparent" />

          {/* grid */}
          <g stroke="rgb(58 69 96 / 0.55)" strokeWidth="1">
            {Array.from({ length: 9 }).map((_, i) => {
              const x = 40 + i * 70;
              return <line key={`vx-${i}`} x1={x} y1={16} x2={x} y2={288} />;
            })}
            {Array.from({ length: 6 }).map((_, i) => {
              const y = 16 + i * 54.4;
              return <line key={`hy-${i}`} x1={40} y1={y} x2={620} y2={y} />;
            })}
          </g>

          {/* axes */}
          <g stroke="rgb(229 229 229 / 0.85)" strokeWidth="2">
            <line x1="40" y1="16" x2="40" y2="288" />
            <line x1="40" y1="288" x2="620" y2="288" />
          </g>

          {/* mock series */}
          <path
            d="M 60 240 L 120 212 L 170 224 L 230 180 L 290 192 L 350 132 L 410 148 L 470 96 L 540 110 L 600 72"
            fill="none"
            stroke="#4F6EB6"
            strokeWidth="3"
          />
          <path
            d="M 60 252 L 120 236 L 170 242 L 230 210 L 290 222 L 350 184 L 410 200 L 470 160 L 540 172 L 600 150"
            fill="none"
            stroke="#FF7D14"
            strokeWidth="3"
          />

          {/* labels */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="12" fill="rgb(176 184 196)">
            <text x="44" y="30">Y</text>
            <text x="608" y="304">X</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

