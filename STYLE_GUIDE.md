# Smart Money Simulator · Style Guide (Мир трейдинга)

В проекте используется тёмная flat-тема (без теней и градиентов) на базе кастомных Tailwind-токенов.
Визуальная проверка и примеры компонентов находятся на странице **`/style-guide`**.

## Шрифты

- **Sans**: Montserrat (400/600/700)
- **Mono**: JetBrains Mono (500)

Подключение выполняется в `app/layout.tsx` через Google Fonts. CSS-переменные описаны в `app/globals.css`,
а также задано `font-family` для `body`.

## Цветовая схема (токены)

Токены определены как:

- CSS-переменные в `app/globals.css` (`--color-*`)
- кастомные цвета Tailwind в `tailwind.config.ts`

### Базовые цвета

- **bg**: `#24304A` — основной фон приложения
- **surface**: `#2F3A50` — поверхности/карточки
- **border**: `#3A4560` — границы и сетка

### Текст

- **text-primary**: `#FFFFFF`
- **text-secondary**: `#E5E5E5`
- **text-muted**: `#B0B8C4`

### Акценты и статусы

- **accent-blue**: `#4F6EB6`
- **accent-orange**: `#FF7D14`
- **profit**: `#00C853`
- **loss**: `#FF3D3D`

## Базовые компоненты (Tailwind-only)

Все компоненты реализованы через Tailwind-классы и используют кастомные токены цветов/шрифтов.
Расположение: `components/ui/`.

- **`Button`** (`components/ui/Button.tsx`)
  - пропсы: `variant: "primary" | "secondary" | "danger"`, `size: "base" | "large"`, `icon?: ReactNode`
  - правила: primary — оранжевый акцент; secondary — поверхность; danger — красный
- **`Card`** (`components/ui/Card.tsx`)
  - правила: `bg-surface`, `border-border`, `rounded-xl`
- **`Stepper`** (`components/ui/Stepper.tsx`)
  - пропсы: `steps: string[]`, `currentStep: number` (0-based)
  - правила: активный шаг — оранжевый; пройденный — зелёный; остальные — muted
- **`ChartPlaceholder`** (`components/ui/ChartPlaceholder.tsx`)
  - flat SVG-заглушка с осями и сеткой; цвета: `border`, `accent-blue`, `accent-orange`

## Правила использования

- **Flat only**: не использовать `shadow-*`, inset-шадоу, градиенты.
- **Токены вместо произвольных цветов**: применять `bg-bg`, `bg-surface`, `border-border`, `text-text-*`,
  `text-accent-*`, `text-profit/loss`.
- **Семантика**:
  - фон страницы — `bg-bg`
  - контейнеры/панели — `bg-surface`
  - вложенные блоки внутри карточек — `bg-bg` + `border-border`

