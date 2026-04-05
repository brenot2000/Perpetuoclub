import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const forWho = [
  'Você já roda ou quer rodar anúncios no Facebook',
  'Sofre com ROI instável e dias de prejuízo',
  'Quer escalar sem aumentar o risco',
  'Está cansado de depender de testes caros',
  'Quer um método que funcione de forma sistemática',
  'Busca previsibilidade nas suas campanhas',
];

const notFor = [
  'Quem nunca pretende usar anúncios pagos',
  'Quem quer resultados sem aplicar o método',
  'Quem não tem produto ou serviço para vender',
  'Quem busca fórmulas mágicas sem esforço',
];

export function ForWhoNotFor() {
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
            Esse evento é para você?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            Para Quem É — e Para Quem{' '}
            <span className="text-brand-red">Não É</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For who */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-card border border-brand-green/40 rounded-2xl overflow-hidden"
          >
            <div className="bg-brand-green/10 border-b border-brand-green/30 p-5">
              <h3 className="text-brand-green font-bold text-xl flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                ESSE EVENTO É PARA VOCÊ
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {forWho.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-card border border-brand-red/40 rounded-2xl overflow-hidden"
          >
            <div className="bg-brand-red/10 border-b border-brand-red/30 p-5">
              <h3 className="text-brand-red font-bold text-xl flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                NÃO É PARA VOCÊ SE...
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {notFor.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
