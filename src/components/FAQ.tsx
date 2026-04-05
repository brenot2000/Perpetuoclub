import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Preciso ter experiência com Facebook Ads para participar?',
    a: 'Não é necessário ser expert, mas é recomendado ter ao menos uma noção básica de como funciona o gerenciador de anúncios. O Breno vai explicar tudo desde a configuração inicial.',
  },
  {
    q: 'O evento é ao vivo? E se eu não conseguir assistir?',
    a: 'Sim, são 2 dias de evento ao vivo nos dias 16 e 17 de Abril. Mas não se preocupe: todos os inscritos recebem acesso à gravação completa após o evento.',
  },
  {
    q: 'O BIDCAP funciona para qualquer nicho?',
    a: 'Sim. O BIDCAP é uma estratégia de configuração de campanhas que funciona independentemente do nicho, seja infoprodutos, e-commerce, serviços locais ou qualquer outro produto digital ou físico.',
  },
  {
    q: 'Qual o mínimo de orçamento para aplicar o BIDCAP?',
    a: 'O método funciona com orçamentos a partir de R$30/dia. Breno vai mostrar como adaptar a estratégia para diferentes tamanhos de investimento.',
  },
  {
    q: 'E se eu pedir reembolso?',
    a: 'Sem problemas. Você tem 7 dias de garantia total a partir da data da compra. Basta enviar um e-mail solicitando o reembolso e devolvemos 100% do valor pago, sem questionamentos.',
  },
  {
    q: 'Posso parcelar o pagamento?',
    a: 'Sim! Você pode parcelar em até 12x no cartão de crédito. O pagamento também pode ser feito via Pix com acesso imediato após a confirmação.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-card/30 to-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <HelpCircle className="w-10 h-10 text-brand-orange mx-auto mb-4" />
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Perguntas e <span className="text-brand-orange">Respostas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-orange/40 transition-colors"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
                  <span className="font-semibold text-white text-base group-hover:text-brand-orange transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
