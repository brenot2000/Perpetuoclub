import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';
import { CtaButton } from './CtaButton';

const included = [
  'Evento ao Vivo Dia 1 — 16 de Abril',
  'Evento ao Vivo Dia 2 — 17 de Abril',
  'Gravação completa dos 2 dias',
  'Mentoria ao vivo com Breno Santo',
  'Q&A em tempo real',
  'BÔNUS: IA Geradora de Criativos (valor R$197)',
];

export function Pricing() {
  return (
    <section className="py-20 px-4" id="comprar">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Oferta Especial 1º Lote
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Garanta Sua Vaga Pelo{' '}
            <span className="text-brand-orange">Menor Preço</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-card border-2 border-brand-orange rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,107,0,0.25)]"
        >
          {/* Header */}
          <div className="bg-brand-orange px-8 py-5 text-center">
            <p className="text-white font-bold uppercase tracking-widest text-sm">
              Evento Ao Vivo BIDCAP — 16 e 17 de Abril
            </p>
          </div>

          <div className="p-8 sm:p-12">
            {/* Included list */}
            <div className="space-y-3 mb-10">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-brand-muted text-lg line-through">De R$97,00</p>
              <div className="flex items-end justify-center gap-2 mt-1">
                <span className="text-gray-400 text-2xl font-bold">R$</span>
                <span className="text-7xl sm:text-8xl font-black text-white leading-none">27</span>
                <span className="text-gray-400 text-2xl font-bold mb-2">,00</span>
              </div>
              <p className="text-brand-orange font-bold text-sm mt-2">
                Apenas no 1º Lote — Preço pode subir a qualquer momento
              </p>
            </div>

            {/* CTA */}
            <CtaButton
              text="TOQUE AQUI E GARANTA MINHA VAGA POR R$27"
              size="xl"
              microCopy="Desconto aplicado automaticamente no checkout"
            />

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-brand-green" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-brand-orange" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Suporte 24h</span>
              </div>
            </div>

            {/* Security logos row */}
            <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
              <div className="bg-brand-border rounded px-3 py-1 text-xs font-bold text-gray-400">NORTON SECURED</div>
              <div className="bg-brand-border rounded px-3 py-1 text-xs font-bold text-gray-400">SSL 256-BIT</div>
              <div className="bg-brand-border rounded px-3 py-1 text-xs font-bold text-gray-400">PAGAMENTO SEGURO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
