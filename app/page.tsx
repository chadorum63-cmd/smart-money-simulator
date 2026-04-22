function TradingSimulator() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <section className="lg:col-span-8">
            <div className="h-[52vh] min-h-[320px] w-full rounded-xl border border-zinc-700/60 bg-[#0f1320] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
              <div className="flex items-center gap-2 border-b border-zinc-700/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-xs text-zinc-300/90">График</div>
              </div>
              <div className="flex h-[calc(100%-49px)] items-center justify-center px-4 text-sm text-zinc-300/80">
                Место для графика (PNG)
              </div>
            </div>
          </section>

          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-zinc-700/60 bg-[#0f1320] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] sm:p-5">
              <h1 className="text-base font-semibold tracking-tight text-zinc-50">
                Практикум Smart Money
              </h1>

              <div className="mt-4 rounded-lg border border-zinc-700/50 bg-[#131722] p-3">
                <div className="text-xs font-medium text-zinc-300/80">Текущий шаг</div>
                <div className="mt-1 text-sm text-zinc-100">
                  Подготовка сценария. Скоро здесь появится пошаговый план.
                </div>
              </div>

              <button
                type="button"
                disabled
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-zinc-700/40 px-4 py-2.5 text-sm font-medium text-zinc-300/70 ring-1 ring-inset ring-zinc-600/40"
              >
                Я готов войти
              </button>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-zinc-800/70">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-zinc-400 sm:px-6 lg:px-8">
          Учебный тренажёр. Не является инвестиционной рекомендацией.
        </div>
      </footer>
    </div>
  );
}

export default function Page() {
  return <TradingSimulator />;
}

