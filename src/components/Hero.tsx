import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import { CtaButton } from './CtaButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-orange/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Tag */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            Evento Ao Vivo — 16 e 17 de Abril
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
        >
          A Estratégia Oculta Que{' '}
          <span className="text-brand-orange">Obriga o Facebook</span> a Vender
          Mais Barato Para Você — Com{' '}
          <span className="text-brand-orange">ROI Garantido</span> e Sem Riscos
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Descubra o método <strong className="text-white">BIDCAP</strong> que
          eliminou os dias de prejuízo, tornou o ROI constante e previsível, e
          permitiu escalar anúncios no Facebook sem entrar no gerenciador todo
          santo dia.
        </motion.p>

        {/* VSL Placeholder */}
        <motion.div
          {...fadeUp(0.4)}
          className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden bg-brand-card border border-brand-border cursor-pointer group"
          style={{ aspectRatio: '16/9' }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-900 to-brand-dark">
            <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.6)] group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
            <p className="text-gray-400 text-sm font-medium">
              ▶ Assista ao vídeo e descubra o método
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.5)}>
          <CtaButton
            text="TOQUE AQUI E GARANTA SUA VAGA AGORA"
            size="xl"
            microCopy="🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato por E-mail"
          />
        </motion.div>

        {/* Social proof mini */}
        <motion.div {...fadeUp(0.6)}>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Users className="w-4 h-4 text-brand-orange" />
            <span>
              Junte-se a mais de{' '}
              <strong className="text-white">50.000 alunos</strong> que já
              transformaram seus resultados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
