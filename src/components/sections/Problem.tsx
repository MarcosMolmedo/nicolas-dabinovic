import { Brain, HeartHandshake, Hourglass } from 'lucide-react';
import Container from '@/components/ui/Container';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.section} id="problema">
      <Container className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>El problema real</h2>

          <p className={styles.subtitle}>
            Quizás el problema no es lo que pensás.
          </p>

          <p className={styles.description}>
            Detrás del miedo al rechazo, la necesidad de aprobación o la
            dificultad para poner límites, suele haber algo más profundo.
          </p>

          <p className={styles.linkText}>Exploremos lo que está pasando.</p>
        </div>

        <div className={styles.problems}>
          <article className={styles.problem}>
            <div className={styles.icon}>
              <Brain size={24} strokeWidth={1.6} />
            </div>

            <h3>
              Pensamientos que
              <br />
              no paran
            </h3>

            <p>Sobrepensás lo que decís, lo que hacés y cómo reaccionará el otro.</p>
          </article>

          <article className={styles.problem}>
            <div className={styles.icon}>
              <HeartHandshake size={24} strokeWidth={1.6} />
            </div>

            <h3>
              Patrones que
              <br />
              se repiten
            </h3>

            <p>
              Te adaptás, te callás o cedés para evitar rechazo, distancia o
              conflicto.
            </p>
          </article>

          <article className={styles.problem}>
            <div className={styles.icon}>
              <Hourglass size={24} strokeWidth={1.6} />
            </div>

            <h3>
              Te sentís
              <br />
              estancado
            </h3>

            <p>
              Entendés lo que te pasa, pero seguís postergando decisiones que
              sabés que necesitás tomar.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}