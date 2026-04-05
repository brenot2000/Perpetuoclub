import { motion } from 'framer-motion';
import { CtaButton } from './CtaButton';
import { Shield } from 'lucide-react';

export function CtaMid() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 border border-brand-orange/40 rounded-3xl p-10 sm:p-14 text-center"
      >
        <Shield className="w-12 h-12 text-brand-orange mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
          Você Está a Um Passo de Ter{' '}
          <span className="text-brand-orange">ROI Garantido</span> e Constante
          no Facebook Ads
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Acesse o evento ao vivo e aprenda o método que o Breno usa para
          escalar sem risco — por apenas{' '}
          <strong className="text-white">R$27 no 1º lote</strong>.
        </p>
        <CtaButton
          text="TOQUE AQUI E GARANTA MINHA VAGA"
          size="xl"
          microCopy="Plataforma Oficial e Blindada • Acesso Imediato"
        />
      </motion.div>
    </section>
  );
}
