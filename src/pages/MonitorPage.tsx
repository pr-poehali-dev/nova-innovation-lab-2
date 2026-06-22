import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import Icon from "@/components/ui/icon"
import { getMonitorBySlug, monitors } from "@/data/monitors"

const accentBadge: Record<string, string> = {
  gray: "text-gray-300 border-gray-500/30 bg-gray-500/10",
  red: "text-red-400 border-red-500/30 bg-red-500/10",
  gold: "text-amber-300 border-amber-500/30 bg-amber-500/10",
}

const MonitorPage = () => {
  const { slug } = useParams()
  const monitor = slug ? getMonitorBySlug(slug) : undefined

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <PageTransition>
          <main className="flex-1 flex flex-col items-center relative pt-24">
            <MouseGlow
              color="rgba(220, 38, 38, 0.12)"
              size={600}
              blur={150}
              opacity={0.6}
              followSpeed={0.05}
            />

            {!monitor ? (
              <div className="container px-6 py-32 text-center">
                <h1 className="font-heading text-3xl">Товар не найден</h1>
                <Button className="mt-6 neumorphic-button-primary" asChild>
                  <Link to="/">На главную</Link>
                </Button>
              </div>
            ) : (
              <>
                <section className="container px-6 md:px-8 py-12">
                  <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-foreground transition-colors">
                      Главная
                    </Link>
                    <Icon name="ChevronRight" className="h-4 w-4" />
                    <span className="text-foreground">{monitor.name}</span>
                  </nav>

                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal>
                      <SpotlightCard className="relative overflow-hidden rounded-2xl border glassmorphic-card p-2 border-glow-red">
                        <div className="absolute inset-0 z-10 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 pointer-events-none" />
                        <motion.img
                          src={monitor.image}
                          alt={monitor.name}
                          className="aspect-square w-full rounded-xl object-cover"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.7 }}
                        />
                      </SpotlightCard>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                      <div className="flex flex-col justify-center space-y-6">
                        <span
                          className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${accentBadge[monitor.accent]}`}
                        >
                          {monitor.tier}
                        </span>
                        <div>
                          <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                            {monitor.name}
                          </h1>
                          <p className="mt-2 text-lg text-muted-foreground opacity-80">{monitor.tagline}</p>
                        </div>

                        <p className="text-muted-foreground md:text-lg opacity-90">{monitor.description}</p>

                        <div className="flex items-end gap-4">
                          <span className="text-4xl font-bold gradient-text">
                            {monitor.price.toLocaleString("ru-RU")} ₽
                          </span>
                          {monitor.oldPrice && (
                            <span className="mb-1.5 text-lg text-muted-foreground line-through opacity-60">
                              {monitor.oldPrice.toLocaleString("ru-RU")} ₽
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                          <GradientButton
                            glowAmount={5}
                            className="px-8 py-3 text-base"
                            gradientFrom="from-red-500"
                            gradientTo="to-red-700"
                          >
                            <span className="flex items-center">
                              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                              Купить
                            </span>
                          </GradientButton>

                        </div>

                        <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                          {monitor.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Icon name="Check" className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>
                </section>

                {/* Характеристики */}
                <section className="container px-6 md:px-8 py-12">
                  <ScrollReveal>
                    <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      Характеристики
                    </h2>
                    <div className="grid gap-px overflow-hidden rounded-2xl border glassmorphic-card sm:grid-cols-2">
                      {monitor.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-center justify-between gap-4 px-6 py-4"
                        >
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                          <span className="text-sm font-medium text-foreground text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </section>

                {/* Другие модели */}
                <section className="container px-6 md:px-8 py-12 pb-24">
                  <ScrollReveal>
                    <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      Сравните с другими моделями
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                      {monitors
                        .filter((m) => m.slug !== monitor.slug)
                        .map((m) => (
                          <Link
                            key={m.id}
                            to={`/${m.slug}`}
                            className="group flex items-center gap-4 rounded-xl border glassmorphic-card p-4 transition-colors hover:border-primary/40"
                          >
                            <img
                              src={m.image}
                              alt={m.name}
                              className="h-16 w-16 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-foreground">{m.name}</p>
                              <p className="text-sm gradient-text font-semibold">
                                {m.price.toLocaleString("ru-RU")} ₽
                              </p>
                            </div>
                            <Icon
                              name="ArrowRight"
                              className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        ))}
                    </div>
                  </ScrollReveal>
                </section>
              </>
            )}
          </main>
        </PageTransition>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}

export default MonitorPage