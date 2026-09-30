import Container from '@/components/ui/Container';
import styles from './Method.module.css';

export default function Method() {
  return (
    <section className={styles.section} id="metodo">
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Método RAÍZ</h2>

          <p className={styles.subtitle}>
            Un camino para volver a sentirte completo.
          </p>
        </div>

        <div className={styles.steps}>
          <article className={styles.step}>
            <span className={styles.number}>01</span>

            <h3>Desaprender</h3>

            <p>
              Cuestionar las ideas y formas de vivir que te llevaron a creer
              que tenías que agradar, adaptarte o dejarte para después para
              sentirte querido y suficiente.
            </p>
          </article>

          <span className={styles.arrow} aria-hidden="true">
            →
          </span>

          <article className={styles.step}>
            <span className={styles.number}>02</span>

            <h3>Desarrollar</h3>

            <p>
              Aprender a reconocer lo que pasa dentro tuyo, atravesar emociones
              difíciles y construir nuevas formas de responder sin volver a
              los patrones de siempre.
            </p>
          </article>

          <span className={styles.arrow} aria-hidden="true">
            →
          </span>

          <article className={styles.step}>
            <span className={styles.number}>03</span>

            <h3>Integrar</h3>

            <p>
              Llevar ese cambio a tu vida real: a tus vínculos, tus decisiones
              y tu día a día, hasta que vivir desde vos mismo deje de sentirse
              extraño y empiece a sentirse natural.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}