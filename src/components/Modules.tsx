import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const modules = [
  {
    title: 'Módulo 1 — A Psicologia do Algoritmo',
    content:
      'Entenda como o leilão do Facebook funciona por dentro e por que a maioria dos anunciantes está sempre pagando mais caro do que deveria. Aprenda a pensar como o algoritmo para usá-lo a seu favor.',
  },
  {
    title: 'Módulo 2 — Configuração Perfeita do BIDCAP',
    content:
      'Passo a passo completo de como configurar o BIDCAP no seu gerenciador de anúncios. Desde a escolha do objetivo de campanha ideal até os ajustes finos que fazem toda a diferença no resultado.',
  },
  {
    title: 'Módulo 3 — Estrutura de Escala Sem Risco',
    content:
      'Como estruturar conjuntos de anúncios para escalar com segurança. Regras de quando e quanto aumentar o orçamento, como interpretar os sinais do algoritmo e evitar os erros mais comuns ao escalar.',
  },
  {
    title: 'Módulo 4 — Otimização Avançada e Análise de Dados',
    content:
      'Métricas que realmente importam no BIDCAP, como identificar anúncios vencedores, quando matar um conjunto e como replicar campanhas de sucesso em novos nichos e produtos.',
  },
];

export function Modules() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Conteúdo do Evento
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            O Que Você Vai Aprender em{' '}
            <span className="text-brand-orange">Cada Módulo</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {modules.map((mod, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-orange/40 transition-colors"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
                  <span className="font-bold text-white text-base group-hover:text-brand-orange transition-colors">
                    {mod.title}
                  </span>
                  <ChevronDown className="w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-gray-300 leading-relaxed data-[state=open]:animate-none">
                  {mod.content}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
