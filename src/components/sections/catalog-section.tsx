import { ScrollReveal } from "@/components/scroll-reveal"
import { MonitorCard } from "@/components/monitor-card"
import { monitors } from "@/data/monitors"

export function CatalogSection() {
  return (
    <section id="catalog" className="relative w-full py-16 md:py-24">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="gradient-text">Мониторы</span> для любой задачи
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg opacity-80">
              Три модели на любой бюджет — от надёжного офисного до флагманского ultrawide.
              Выбирайте под себя.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {monitors.map((monitor, i) => (
            <ScrollReveal key={monitor.id} delay={i * 0.15}>
              <MonitorCard monitor={monitor} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
