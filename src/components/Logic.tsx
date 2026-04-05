import { motion } from 'framer-motion';
import { Brain, CheckCircle } from 'lucide-react';
import { CtaButton } from './CtaButton';

const reasons = [
  'O Facebook Ads usa leilão para definir quem vai receber o anúncio. Quem oferece mais, aparece mais — mas nem sempre converte melhor.',
  'Sem limite de bid, o algoritmo gasta onde é mais fácil entregar, não onde é mais barato converter.',
  'O BIDCAP cria uma restrição matemática: o algoritmo só pode comprar impressões que caibam no seu custo máximo por resultado.',
  'Isso força uma varredura mais profunda e qualificada da audiência — encontrando quem converte melhor pelo menor custo.',
  'O resultado: CPL e CPA menores, ROI maior, e escalabilidade sem caos.',
];

export function Logic() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-card/40 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Lógica e Razão
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Por Que o BIDCAP{' '}
            <span className="text-brand-orange">Funciona Matematicamente</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5 mb-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start bg-brand-card border border-brand-border rounded-xl p-5"
            >
              <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
              <p className="text-gray-200 text-base leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-8 text-center mb-10"
        >
          <Brain className="w-12 h-12 text-brand-orange mx-auto mb-4" />
          <h3 className="text-2xl font-black text-white mb-3">
            Em resumo: você para de jogar no escuro
          </h3>
          <p className="text-gray-300 text-lg">
            O BIDCAP não é hack ou gambiarra — é usar a própria lógica do
            algoritmo a seu favor. E o Breno vai te mostrar{' '}
            <strong className="text-white">exatamente como configurar</strong>{' '}
            no seu gerenciador.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CtaButton
            text="TOQUE AQUI E QUERO APRENDER O MÉTODO"
            microCopy="🔒 Compra 100% Segura • Suporte Imediato"
          />
        </motion.div>
      </div>
    </section>
  );
}
