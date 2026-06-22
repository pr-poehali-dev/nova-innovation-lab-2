import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import type { Monitor } from "@/data/monitors"

const accentClasses: Record<Monitor["accent"], string> = {
  gray: "text-gray-300 border-gray-500/30 bg-gray-500/10",
  red: "text-red-400 border-red-500/30 bg-red-500/10",
  gold: "text-amber-300 border-amber-500/30 bg-amber-500/10",
}

export function MonitorCard({ monitor }: { monitor: Monitor }) {
  return (
    <SpotlightCard className="group relative h-full overflow-hidden rounded-2xl border glassmorphic-card p-6 flex flex-col">
      <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/60 to-black/60">
        <motion.img
          src={monitor.image}
          alt={monitor.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <span
          className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-medium ${accentClasses[monitor.accent]}`}
        >
          {monitor.tier}
        </span>
      </div>

      <h3 className="font-heading text-xl tracking-tight">{monitor.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground opacity-80">{monitor.tagline}</p>

      <div className="mt-4 flex items-end gap-3">
        <span className="text-2xl font-bold gradient-text">
          {monitor.price.toLocaleString("ru-RU")} ₽
        </span>
        {monitor.oldPrice && (
          <span className="mb-1 text-sm text-muted-foreground line-through opacity-60">
            {monitor.oldPrice.toLocaleString("ru-RU")} ₽
          </span>
        )}
      </div>

      <div className="mt-auto pt-6">
        <Button className="w-full neumorphic-button-primary" asChild>
          <Link to={`/${monitor.slug}`} className="flex items-center justify-center">
            Подробнее
            <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </SpotlightCard>
  )
}
