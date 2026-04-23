import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { ChartPlaceholder } from "../../components/ui/ChartPlaceholder";
import { Stepper } from "../../components/ui/Stepper";

const palette = [
  { name: "bg", hex: "#24304A", className: "bg-bg" },
  { name: "surface", hex: "#2F3A50", className: "bg-surface" },
  { name: "border", hex: "#3A4560", className: "bg-border" },
  { name: "text-primary", hex: "#FFFFFF", className: "bg-text-primary" },
  { name: "text-secondary", hex: "#E5E5E5", className: "bg-text-secondary" },
  { name: "text-muted", hex: "#B0B8C4", className: "bg-text-muted" },
  { name: "accent-blue", hex: "#4F6EB6", className: "bg-accent-blue" },
  { name: "accent-orange", hex: "#FF7D14", className: "bg-accent-orange" },
  { name: "profit", hex: "#00C853", className: "bg-profit" },
  { name: "loss", hex: "#FF3D3D", className: "bg-loss" }
] as const;

function IconArrowRight(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
    >
      <path
        d="M13 5l7 7-7 7M20 12H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              Style Guide · Мир трейдинга
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-text-muted">
              Палитра, типографика и базовые UI-компоненты (flat, без теней и градиентов).
            </p>
          </div>
          <a
            href="/"
            className="text-sm font-semibold text-accent-blue hover:underline"
          >
            На главную
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Palette */}
          <section className="lg:col-span-12">
            <Card className="p-5">
              <h2 className="text-base font-bold tracking-tight">Палитра</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {palette.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full border border-border ${c.className}`}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-text-primary">
                        {c.name}
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        {c.hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Typography */}
          <section className="lg:col-span-6">
            <Card className="p-5">
              <h2 className="text-base font-bold tracking-tight">Типографика</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-text-muted">H1</div>
                  <div className="mt-1 text-3xl font-bold tracking-tight text-text-primary">
                    Практикум Smart Money
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted">H2</div>
                  <div className="mt-1 text-2xl font-bold tracking-tight text-text-primary">
                    Подготовка сценария
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted">H3</div>
                  <div className="mt-1 text-xl font-semibold tracking-tight text-text-primary">
                    Контроль риска
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted">Paragraph</div>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    Тёмная основа, белый текст, синие и оранжевые акценты. Никаких теней
                    и градиентов — только flat.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted">Mono</div>
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    ticker=BTCUSDT · tf=15m · rr=1:3 · sl=0.6%
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Buttons */}
          <section className="lg:col-span-6">
            <Card className="p-5">
              <h2 className="text-base font-bold tracking-tight">Кнопки</h2>

              <div className="mt-4 space-y-6">
                <div>
                  <div className="text-xs font-semibold text-text-muted">Base</div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Button variant="primary" size="base">
                      Primary
                    </Button>
                    <Button
                      variant="primary"
                      size="base"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Primary
                    </Button>
                    <Button variant="secondary" size="base">
                      Secondary
                    </Button>
                    <Button
                      variant="secondary"
                      size="base"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Secondary
                    </Button>
                    <Button variant="danger" size="base">
                      Danger
                    </Button>
                    <Button
                      variant="danger"
                      size="base"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Danger
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-text-muted">Large</div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Button variant="primary" size="large">
                      Primary
                    </Button>
                    <Button
                      variant="primary"
                      size="large"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Primary
                    </Button>
                    <Button variant="secondary" size="large">
                      Secondary
                    </Button>
                    <Button
                      variant="secondary"
                      size="large"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Secondary
                    </Button>
                    <Button variant="danger" size="large">
                      Danger
                    </Button>
                    <Button
                      variant="danger"
                      size="large"
                      icon={<IconArrowRight className="h-5 w-5" />}
                    >
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Card + Stepper */}
          <section className="lg:col-span-5">
            <Card className="p-5">
              <h2 className="text-base font-bold tracking-tight">Карточка</h2>
              <div className="mt-4 rounded-lg border border-border bg-bg p-4">
                <div className="text-xs font-semibold text-text-muted">Сводка</div>
                <div className="mt-1 text-sm text-text-secondary">
                  Карточки всегда с `bg-surface`, внутри допускается `bg-bg` для вложенных блоков.
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-profit">PnL +2.3%</span>
                  <span className="text-loss">DD -0.8%</span>
                </div>
              </div>
            </Card>
          </section>

          <section className="lg:col-span-7">
            <Card className="p-5">
              <h2 className="text-base font-bold tracking-tight">Stepper</h2>
              <Stepper
                className="mt-4"
                steps={["Анализ", "Вход", "Стоп-лосс", "Тейк-профит"]}
                currentStep={1}
              />
            </Card>
          </section>

          {/* Chart placeholder */}
          <section className="lg:col-span-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-12">
                <ChartPlaceholder title="Заглушка графика" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-text-muted sm:px-6 lg:px-8">
          Smart Money Trading Simulator · style guide
        </div>
      </footer>
    </div>
  );
}

