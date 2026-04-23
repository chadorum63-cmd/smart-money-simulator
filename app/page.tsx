import { ChartPlaceholder } from "../components/ui/ChartPlaceholder";
import { Card } from "../components/ui/Card";
import { Stepper } from "../components/ui/Stepper";

function TradingSimulator() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <section className="lg:col-span-8">
            <ChartPlaceholder />
          </section>

          <aside className="lg:col-span-4">
            <Card className="p-4 sm:p-5">
              <h1 className="text-base font-semibold tracking-tight text-text-primary">
                Практикум Smart Money
              </h1>

              <div className="mt-4 rounded-lg border border-border bg-bg p-4">
                <div className="text-xs font-semibold text-text-muted">План</div>
                <div className="mt-3">
                  <Stepper
                    steps={["Анализ", "Вход", "Стоп-лосс", "Тейк-профит"]}
                    currentStep={1}
                  />
                </div>
              </div>

              <button
                type="button"
                disabled
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-zinc-700/40 px-4 py-2.5 text-sm font-medium text-zinc-300/70 ring-1 ring-inset ring-zinc-600/40"
              >
                Я готов войти
              </button>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-text-muted sm:px-6 lg:px-8">
          Учебный тренажёр. Не является инвестиционной рекомендацией.
        </div>
      </footer>
    </div>
  );
}

export default function Page() {
  return <TradingSimulator />;
}

