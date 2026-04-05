import { motion } from 'framer-motion';
import { Gift, Sparkles, Cpu } from 'lucide-react';

export function Bonuses() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-card/40 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Bônus Exclusivos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Além do Evento, Você Recebe{' '}
            <span className="text-brand-orange">Estes Presentes</span>
          </h2>
        </motion.div>

        {/* Bonus Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-brand-card to-brand-dark border-2 border-brand-orange/60 rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-brand-orange/10 border-2 border-brand-orange/40 flex flex-col items-center justify-center gap-1">
              <Cpu className="w-10 h-10 text-brand-orange" />
              <Gift className="w-5 h-5 text-brand-orange" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                <span className="bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Gift className="w-3 h-3" /> Bônus #1
                </span>
                <span className="bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase px-3 py-1 rounded-full">
                  GRÁTIS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                <Sparkles className="w-7 h-7 text-brand-orange" />
                IA Geradora de Criativos
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Acesso exclusivo à IA treinada pelo Breno para gerar textos e
                ideias de criativos para seus anúncios — otimizados para campanhas
                BIDCAP. Chega de gastar horas pensando no que escrever.
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-6">
                <div className="text-center">
                  <p className="text-brand-muted text-sm line-through">De R$197</p>
                  <p className="text-brand-green text-2xl font-black">GRÁTIS</p>
                </div>
                <div className="h-12 w-px bg-brand-border" />
                <p className="text-sm text-gray-400 max-w-xs">
                  Incluído automaticamente para todos os inscritos no evento
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-lg">
            Valor total dos bônus:{' '}
            <span className="line-through text-brand-muted">R$197</span>
          </p>
          <p className="text-2xl font-black text-white mt-1">
            Você recebe <span className="text-brand-green">TUDO GRÁTIS</span>{' '}
            ao garantir sua vaga
          </p>
        </motion.div>
      </div>
    </section>
  );
}
