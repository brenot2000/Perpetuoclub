import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '50.000+', label: 'Alunos Formados' },
  { icon: TrendingUp, value: 'R$10M+', label: 'Em Vendas Geradas' },
  { icon: Award, value: '7 Anos', label: 'De Experiência' },
];

export function ExpertStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-card/30 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Quem vai te ensinar isso
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-brand-orange/20 blur-2xl scale-110" />
              <img
                src="/breno.jpg"
                alt="Breno Santo"
                className="relative w-72 sm:w-80 rounded-2xl object-cover object-top border-2 border-brand-orange/40 shadow-[0_0_50px_rgba(255,107,0,0.3)]"
                style={{ aspectRatio: '3/4' }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  const parent = el.parentElement;
                  if (parent) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'relative w-72 sm:w-80 rounded-2xl border-2 border-brand-orange/40 shadow-[0_0_50px_rgba(255,107,0,0.3)] bg-gradient-to-br from-brand-orange/20 to-brand-dark flex items-center justify-center text-brand-orange font-bold text-lg';
                    placeholder.style.aspectRatio = '3/4';
                    placeholder.textContent = 'Breno Santo';
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg">
                Breno Santo
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              O Infoprodutor que{' '}
              <span className="text-brand-orange">Parou de Jogar no Escuro</span>{' '}
              e Encontrou um Método Infalível
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Há 7 anos no mercado digital, já como co-produtor e infoprodutor em
              mais de <strong className="text-white">10 nichos diferentes</strong>,
              Breno Santo chegou a um ponto que todo anunciante conhece:{' '}
              <em className="text-brand-red">meses de resultados instáveis, testes caros e dias de prejuízo.</em>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Foi então que descobriu o <strong className="text-white">BIDCAP</strong> —
              uma configuração estratégica no próprio Facebook Ads que{' '}
              <strong className="text-white">obriga o algoritmo a entregar tráfego barato</strong>,
              mantendo o ROI constante mesmo enquanto escala.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Pela primeira vez, Breno vai abrir ao vivo como usa esse método no
              seu próprio negócio — criando campanhas, otimizando e escalando na
              frente de todos.{' '}
              <strong className="text-brand-orange">Sem segredos. Sem teoria. Só prática.</strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-brand-card border border-brand-border rounded-xl p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-brand-orange mx-auto mb-2" />
                  <div className="text-xl font-black text-white">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
