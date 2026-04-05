import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { CtaButton } from './CtaButton';

const testimonials = [
  {
    name: 'Ricardo M.',
    role: 'Infoprodutor',
    text: 'Depois do BIDCAP meu CPL caiu 40% e o ROI ficou estável pela primeira vez em 2 anos. Parece mágica, mas é método.',
    stars: 5,
  },
  {
    name: 'Ana Paula S.',
    role: 'Gestora de Tráfego',
    text: 'Apliquei nos meus clientes e os resultados foram imediatos. Todo mundo deveria saber disso antes de gastar em anúncios.',
    stars: 5,
  },
  {
    name: 'Carlos F.',
    role: 'E-commerce Owner',
    text: 'Escalar era um pesadelo — cada vez que aumentava o orçamento o CPA explodia. Com BIDCAP finalmente consigo escalar com segurança.',
    stars: 5,
  },
  {
    name: 'Juliana R.',
    role: 'Empreendedora Digital',
    text: 'Sai de R$500/dia para R$3.000/dia mantendo o mesmo ROI. O Breno é o melhor quando o assunto é tráfego pago.',
    stars: 5,
  },
  {
    name: 'Marcos L.',
    role: 'Co-produtor',
    text: 'Parei de ter dias de prejuízo. Agora sei exatamente o máximo que o Facebook vai me cobrar por resultado. Revolucionou minha operação.',
    stars: 5,
  },
  {
    name: 'Fernanda C.',
    role: 'Lançadora',
    text: 'Meu último lançamento tive ROI positivo desde o primeiro dia de anúncios. Nunca aconteceu isso antes. Breno é genial.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">
            Resultados Reais
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">
            O Que Quem Já Usa o BIDCAP{' '}
            <span className="text-brand-orange">Está Dizendo</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars count={t.stars} />
              <p className="text-gray-300 text-base leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-brand-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CtaButton
            text="TOQUE AQUI E QUERO ESSES RESULTADOS"
            microCopy="Garantia de Satisfação ou seu Dinheiro de Volta"
          />
        </motion.div>
      </div>
    </section>
  );
}
