import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const pains = [
  'Seu ROI é instável — um dia vende, no outro dá prejuízo',
  'Você acorda com medo de ver o quanto o Facebook gastou enquanto você dormia',
  'Cada teste novo custa dinheiro e raramente retorna o investimento',
  'Você fica preso otimizando campanhas manualmente, dia após dia',
  'Escalar os anúncios parece uma roleta: às vezes funciona, às vezes afunda tudo',
  'Você já pensou em desistir dos anúncios e buscar outro canal de vendas',
];

export function PainSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">
            Você reconhece algum desses cenários?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white leading-tight">
            Se você roda anúncios no Facebook, você{' '}
            <span className="text-brand-red">provavelmente sofre</span> com pelo
            menos um desses problemas:
          </h2>
        </motion.div>

        <div className="space-y-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-red/40 transition-colors"
            >
              <XCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
              <p className="text-gray-200 text-lg leading-snug">{pain}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center text-xl text-gray-300"
        >
          Se você marcou pelo menos 1 dessas situações...{' '}
          <strong className="text-white">
            o que vou te mostrar vai mudar completamente o seu jogo.
          </strong>
        </motion.p>
      </div>
    </section>
  );
}
