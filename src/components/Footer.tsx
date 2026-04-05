import { motion } from 'framer-motion';
import { CtaButton } from './CtaButton';
import { AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-brand-border">
      <div className="max-w-3xl mx-auto">
        {/* Final urgency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/40 text-brand-red rounded-full px-4 py-2 text-sm font-bold mb-6">
            <AlertTriangle className="w-4 h-4" />
            ÚLTIMO AVISO — VAGAS LIMITADAS
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
            Não Deixe o Próximo Dia de Prejuízo Decidir Por Você
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            O preço de R$27 do 1º lote pode subir a qualquer momento. Garanta
            sua vaga agora e comece a ter o controle total dos seus anúncios.
          </p>

          <CtaButton
            text="TOQUE AQUI E GARANTA MINHA VAGA POR R$27"
            size="xl"
            microCopy="🔒 Garantia de 7 Dias ou Dinheiro de Volta • Pagamento Seguro"
          />
        </motion.div>

        {/* Logo / branding */}
        <div className="text-center space-y-4">
          <div className="text-2xl font-black text-white">
            <span className="text-brand-orange">BIDCAP</span> Escale Sem Risco
          </div>
          <p className="text-gray-500 text-sm">
            Evento Ao Vivo com Breno Santo — 16 e 17 de Abril de 2026
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 pt-4 border-t border-brand-border">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Política de Reembolso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Contato
            </a>
          </div>

          <p className="text-gray-700 text-xs pt-2">
            © {new Date().getFullYear()} Breno Santo. Todos os direitos reservados.
            <br />
            Este produto não garante resultados específicos. Os resultados podem variar.
          </p>
        </div>
      </div>
    </footer>
  );
}
