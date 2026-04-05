import { motion } from 'framer-motion';
import { Zap, Lock, CreditCard } from 'lucide-react';

interface CtaButtonProps {
  text?: string;
  href?: string;
  microCopy?: string;
  size?: 'md' | 'lg' | 'xl';
}

export function CtaButton({
  text = 'TOQUE AQUI E GARANTA SUA VAGA',
  href = '#',
  microCopy = '🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato por E-mail',
  size = 'lg',
}: CtaButtonProps) {
  const sizeClasses = {
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl',
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <motion.a
        href={href}
        className={`
          inline-flex items-center justify-center gap-3 w-full md:w-auto
          bg-brand-orange hover:bg-brand-orange-dark
          text-white font-extrabold uppercase tracking-wide rounded-xl
          shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_40px_rgba(255,107,0,0.7)]
          transition-shadow duration-300 cursor-pointer select-none
          ${sizeClasses[size]}
        `}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Zap className="w-5 h-5 fill-white flex-shrink-0" />
        {text}
        <Zap className="w-5 h-5 fill-white flex-shrink-0" />
      </motion.a>

      <p className="text-sm text-brand-muted text-center">{microCopy}</p>

      <div className="flex items-center gap-3 text-brand-muted">
        <Lock className="w-4 h-4" />
        <div className="flex gap-2 items-center">
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">Visa</span>
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">Master</span>
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">Pix</span>
        </div>
      </div>
    </div>
  );
}
