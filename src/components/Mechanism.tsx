import { motion } from 'framer-motion';
import { Lock, DollarSign, Cpu, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: DollarSign,
    number: '01',
    title: 'Você Define o Teto',
    desc: 'Configure o BIDCAP informando o custo máximo que você aceita pagar por resultado (lead, venda, clique).',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'O Algoritmo Obedece',
    desc: 'O Facebook passa a buscar SOMENTE audiências que convertem dentro do limite que você estabeleceu.',
  },
  {
    icon: Lock,
    number: '03',
    title: 'Seu Risco é Bloqueado',
    desc: 'Impossível gastar acima do custo por resultado configurado. O Facebook literalmente para antes de ultrapassar.',
  },
  {
    icon: BarChart2,
    number: '04',
    title: 'Você Escala com Segurança',
    desc: 'Aumente o budget sem medo — a eficiência se mantém e o ROI cresce junto com o volume.',
  },
];

export function Mechanism() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            O Mecanismo Único
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Como o BIDCAP{' '}
            <span className="text-brand-orange">Funciona na Prática</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            4 passos simples que transformam completamente a relação entre você
            e o algoritmo do Facebook.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-brand-orange/20 -translate-x-1/2" />

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map(({ icon: Icon, number, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-brand-card border border-brand-border rounded-2xl p-7 flex gap-5 hover:border-brand-orange/40 transition-colors ${
                  i % 2 === 1 ? 'md:mt-8' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center relative">
                    <Icon className="w-7 h-7 text-brand-orange" />
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {number.replace('0', '')}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
