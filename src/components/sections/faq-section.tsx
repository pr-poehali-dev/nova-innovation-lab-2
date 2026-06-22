import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Как быстро доставите монитор?",
      answer:
        "По Москве и Санкт-Петербургу доставляем в день заказа или на следующий день. В другие города России — за 1–3 дня курьерскими службами и транспортными компаниями.",
    },
    {
      question: "Какая гарантия на мониторы?",
      answer:
        "На все модели действует официальная гарантия производителя — от 1 до 3 лет в зависимости от модели. Мы помогаем с гарантийным обслуживанием и ремонтом.",
    },
    {
      question: "Можно ли вернуть монитор?",
      answer:
        "Да, вы можете вернуть товар надлежащего качества в течение 14 дней с момента покупки, если он не подошёл. Деньги вернём в полном объёме.",
    },
    {
      question: "Как выбрать монитор под мои задачи?",
      answer:
        "Для офиса и учёбы подойдёт Start 24, для игр и творчества — Pro 27, для профессиональной работы с графикой — Ultra 34. Если сомневаетесь, позвоните нам — поможем подобрать.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Принимаем оплату картой онлайн и при получении, наличными курьеру, а также предлагаем рассрочку без переплат на большинство моделей.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ответы на популярные вопросы о покупке, доставке и гарантии.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}