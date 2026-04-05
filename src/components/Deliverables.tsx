import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Video, Mic } from 'lucide-react';

const day1 = [
  'Fundamentos do BIDCAP — por que a maioria erra ao configurar',
  'Como definir o bid correto para o seu nicho e produto',
  'Estrutura de campanha ideal para máxima eficiência',
  'Como testar criativos sem desperdiçar orçamento',
  'Configuração ao vivo no gerenciador de anúncios do Breno',
];

const day2 = [
  'Otimização avançada de campanhas BIDCAP em escala',
  'Como dobrar o orçamento mantendo o ROI intacto',
  'Análise de métricas: o que realmente importa monitorar',
  'Estratégia de retargeting com BIDCAP para maximizar conversões',
  'Q&A ao vivo — tire todas as suas dúvidas em tempo real',
];

export function Deliverables() {
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
            O que você vai receber
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            2 Dias de Imersão Completa ao Vivo{' '}
            <span className="text-brand-orange">Com o Breno</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Uma mentoria 100% prática onde você vai ver o método sendo aplicado
            em tempo real nos anúncios do próprio Breno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden"
          >
            <div className="bg-brand-orange/10 border-b border-brand-orange/30 p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">Dia 1 — 16 de Abril</p>
                <h3 className="text-white font-bold text-lg">Fundamentos & Configuração</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {day1.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden"
          >
            <div className="bg-brand-orange/10 border-b border-brand-orange/30 p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">Dia 2 — 17 de Abril</p>
                <h3 className="text-white font-bold text-lg">Escala & Otimização Avançada</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {day2.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 grid sm:grid-cols-2 gap-4"
        >
          <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-5 flex items-center gap-4">
            <Video className="w-8 h-8 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white">Gravação Completa</p>
              <p className="text-sm text-gray-400">Acesso às gravações dos 2 dias do evento</p>
            </div>
          </div>
          <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-5 flex items-center gap-4">
            <Mic className="w-8 h-8 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white">Mentoria Ao Vivo</p>
              <p className="text-sm text-gray-400">Tira-dúvidas direto com o Breno em tempo real</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
