import Container from '@/components/ui/Container';
import styles from './Method.module.css';

export default function Method() {
  return (
    <section className={styles.section} id="metodo">
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>Método Raíz</h2>
          <p className={styles.subtitle}>Tres pasos. Un cambio real.</p>
        </div>

        <div className={styles.steps}>
          <article className={styles.step}>
            <span className={styles.number}>01</span>

            <h3>Desaprender</h3>

            <p>
              Cuestionar la historia que te hizo creer que tenías que adaptarte,
              agradar o callarte para ser querido.
            </p>
          </article>

          <span className={styles.arrow} aria-hidden="true">
            →
          </span>

          <article className={styles.step}>
            <span className={styles.number}>02</span>

            <h3>Desarrollar</h3>

            <p>
              Aprender a sostener emociones difíciles, recuperar tu voz y
              responder de una manera diferente.
            </p>
          </article>

          <span className={styles.arrow} aria-hidden="true">
            →
          </span>

          <article className={styles.step}>
            <span className={styles.number}>03</span>

            <h3>Integrar</h3>

            <p>
              Llevar lo aprendido a tus vínculos y decisiones hasta que elegirte
              deje de ser una excepción.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}