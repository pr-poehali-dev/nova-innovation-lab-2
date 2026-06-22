export interface Monitor {
  id: string
  slug: string
  name: string
  tagline: string
  tier: string
  price: number
  oldPrice?: number
  image: string
  description: string
  specs: { label: string; value: string }[]
  features: string[]
  accent: "gray" | "red" | "gold"
}

export const monitors: Monitor[] = [
  {
    id: "1",
    slug: "monitor-start",
    name: "БытоТех Start 24",
    tagline: "Надёжный монитор для дома и работы",
    tier: "Бюджетный",
    price: 8990,
    oldPrice: 10990,
    image:
      "https://cdn.poehali.dev/projects/0be8d9a8-a64e-4b47-87c1-e3560ed09a34/files/a80df4c0-7ea8-4bbb-a930-52ff0c46d6b5.jpg",
    description:
      "Идеальный выбор для учёбы, офиса и повседневных задач. Чёткая Full HD картинка, тонкие рамки и комфортная для глаз матрица — всё, что нужно каждый день, без переплаты.",
    specs: [
      { label: "Диагональ", value: "24 дюйма" },
      { label: "Разрешение", value: "1920 × 1080 (Full HD)" },
      { label: "Частота", value: "75 Гц" },
      { label: "Матрица", value: "IPS" },
      { label: "Время отклика", value: "5 мс" },
      { label: "Разъёмы", value: "HDMI, VGA" },
    ],
    features: [
      "Тонкие рамки с трёх сторон",
      "Защита глаз Flicker-Free",
      "Регулировка наклона",
      "Низкое энергопотребление",
    ],
    accent: "gray",
  },
  {
    id: "2",
    slug: "monitor-pro",
    name: "БытоТех Pro 27",
    tagline: "Изогнутый монитор для игр и творчества",
    tier: "Средний класс",
    price: 21990,
    oldPrice: 24990,
    image:
      "https://cdn.poehali.dev/projects/0be8d9a8-a64e-4b47-87c1-e3560ed09a34/files/19987640-71c5-41eb-97a2-9ec950fcb010.jpg",
    description:
      "Золотая середина между ценой и качеством. Изогнутый 27-дюймовый экран с частотой 144 Гц погружает в игры и ускоряет работу с графикой. Плавная картинка без разрывов и сочные цвета.",
    specs: [
      { label: "Диагональ", value: "27 дюймов" },
      { label: "Разрешение", value: "2560 × 1440 (QHD)" },
      { label: "Частота", value: "144 Гц" },
      { label: "Матрица", value: "VA, изогнутая 1500R" },
      { label: "Время отклика", value: "1 мс" },
      { label: "Разъёмы", value: "2× HDMI, DisplayPort" },
    ],
    features: [
      "Изогнутый экран 1500R",
      "Адаптивная синхронизация FreeSync",
      "Игровой режим и RGB-подсветка",
      "Охват 95% sRGB",
    ],
    accent: "red",
  },
  {
    id: "3",
    slug: "monitor-ultra",
    name: "БытоТех Ultra 34",
    tagline: "Флагманский ultrawide для профи",
    tier: "Премиум",
    price: 54990,
    oldPrice: 59990,
    image:
      "https://cdn.poehali.dev/projects/0be8d9a8-a64e-4b47-87c1-e3560ed09a34/files/ee841620-f151-4b24-8241-56f6560e17c5.jpg",
    description:
      "Вершина линейки. Огромный 34-дюймовый ultrawide-экран с 4K-чёткостью и точной цветопередачей для дизайнеров, монтажёров и требовательных геймеров. Премиальный металлический корпус и максимум деталей.",
    specs: [
      { label: "Диагональ", value: "34 дюйма (21:9)" },
      { label: "Разрешение", value: "3440 × 1440 (UWQHD)" },
      { label: "Частота", value: "165 Гц" },
      { label: "Матрица", value: "Nano IPS, изогнутая" },
      { label: "Время отклика", value: "0.5 мс" },
      { label: "Разъёмы", value: "USB-C, 2× HDMI, DisplayPort" },
    ],
    features: [
      "Поддержка HDR600",
      "Охват 98% DCI-P3",
      "USB-C с зарядкой ноутбука 90 Вт",
      "Премиальный металлический корпус",
    ],
    accent: "gold",
  },
]

export const getMonitorBySlug = (slug: string) =>
  monitors.find((m) => m.slug === slug)
