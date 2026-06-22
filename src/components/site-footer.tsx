import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="MonitorSmartphone" className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl tracking-tight">БытоТех</span>
            </Link>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Магазин премиальных мониторов БытоТех. Тщательно отобранные модели для дома, игр и профессиональной
              работы — с гарантией и быстрой доставкой по всей России.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icon name="Send" className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://vk.com" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icon name="Users" className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">VK</span>
              </a>
              <a href="https://wa.me" target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icon name="MessageCircle" className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Каталог</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/monitor-start"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Start 24 — бюджетный
                  </Link>
                </li>
                <li>
                  <Link
                    to="/monitor-pro"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Pro 27 — игровой
                  </Link>
                </li>
                <li>
                  <Link
                    to="/monitor-ultra"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Ultra 34 — премиум
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Магазин</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#delivery"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#warranty"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Гарантия
                  </a>
                </li>
                <li>
                  <a
                    href="#payment"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Оплата
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Контакты</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="tel:+78001234567"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    8 800 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bytoteh.ru"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    info@bytoteh.ru
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground opacity-70">
                    Ежедневно с 9:00 до 21:00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} БытоТех. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="#terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Условия
            </a>
            <a
              href="#privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
            >
              Конфиденциальность
            </a>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}