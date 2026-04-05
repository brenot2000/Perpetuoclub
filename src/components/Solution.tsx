import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Controle Total do Custo',
    desc: 'O BIDCAP define um teto máximo de custo por resultado, impedindo que o Facebook gaste mais do que você determina.',
  },
  {
    icon: TrendingUp,
    title: 'ROI Constante e Previsível',
    desc: 'Seus números deixam de ser uma surpresa. Você sabe antes de acordar qual será o resultado do dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Escala Sem Risco',
    desc: 'Aumente o orçamento com segurança — o BIDCAP mantém a eficiência da campanha mesmo ao escalar.',
  },
];

export function Solution() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            A Solução Definitiva
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Apresentando o Método{' '}
            <span className="text-brand-orange">BIDCAP</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Uma configuração estratégica dentro do próprio Facebook Ads que
            literalmente <strong className="text-white">força o algoritmo</strong>{' '}
            a buscar tráfego mais barato e entregar resultados dentro do seu limite
            de custo — <strong className="text-white">sem aumentar o risco</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-8 text-center flex flex-col items-center gap-5 hover:border-brand-orange/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
