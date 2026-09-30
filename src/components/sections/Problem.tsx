import { Brain, HeartHandshake, Compass } from 'lucide-react';

import Container from '@/components/ui/Container';

import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.section} id="problema">
      <Container className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>El problema real</p>

          <h2 className={styles.title}>
            Quizás el problema no es lo que pensás.
          </h2>

          <div className={styles.introText}>
            <p>
              Te acostumbraste a adaptarte, a sostener a los demás y a evitar
              conflictos. De a poco, empezaste a dejarte para después.
            </p>

            <p>
              Y cuando eso se vuelve una forma de vivir, es fácil perder de
              vista qué querés, qué necesitás y quién sos.
            </p>

            <p className={styles.highlight}>
              Hasta que un día sentís un vacío en el pecho, pero no sabés
              exactamente qué te falta.
            </p>
          </div>
        </div>

        <div className={styles.problems}>
          <article className={styles.problem}>
            <div className={styles.icon}>
              <Brain size={26} strokeWidth={1.5} />
            </div>

            <h3>Pensamientos que no paran</h3>

            <p>
              Le das vueltas a lo que dijiste, a lo que hiciste y a lo que el
              otro puede estar pensando de vos.
            </p>
          </article>

          <article className={styles.problem}>
            <div className={styles.icon}>
              <HeartHandshake size={26} strokeWidth={1.5} />
            </div>

            <h3>Te adaptás para no perder</h3>

            <p>
              Cedés, callás o cambiás lo que necesitás para evitar rechazo,
              distancia o conflicto.
            </p>
          </article>

          <article className={styles.problem}>
            <div className={styles.icon}>
              <Compass size={26} strokeWidth={1.5} />
            </div>

            <h3>Sabés que algo tiene que cambiar</h3>

            <p>
              Entendés muchas cosas sobre vos, pero seguís repitiendo patrones
              que te alejan de la vida que querés.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}