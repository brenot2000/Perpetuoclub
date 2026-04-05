import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/40 rounded-3xl p-10 sm:p-14 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="w-24 h-24 rounded-full bg-brand-green/10 border-2 border-brand-green/40 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,200,83,0.3)]"
          >
            <ShieldCheck className="w-12 h-12 text-brand-green" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Garantia Blindada de{' '}
            <span className="text-brand-green">7 Dias</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            Se por qualquer motivo você não ficar satisfeito com o conteúdo do
            evento, basta nos contatar em até{' '}
            <strong className="text-white">7 dias após a compra</strong> e
            devolveremos <strong className="text-white">100% do seu dinheiro</strong>,
            sem perguntas, sem burocracia.
          </p>

          <div className="bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 inline-block">
            <p className="text-brand-green font-bold text-base">
              O risco é ZERO. Ou você transforma seus resultados,<br />
              ou recupera seu investimento integralmente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
