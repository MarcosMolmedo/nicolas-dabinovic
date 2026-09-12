import Container from '@/components/ui/Container';
import styles from './Story.module.css';

export default function Story() {
  return (
    <section className={styles.section} id="historia">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Mi historia</h2>

          <p className={styles.subtitle}>
            De entenderme mucho a empezar a vivir distinto.
          </p>

          <p className={styles.description}>
            Durante años busqué respuestas en la introspección y el desarrollo
            personal. Entendía muchas cosas sobre mí, pero seguía postergando
            decisiones y repitiendo patrones que me alejaban de la vida que
            quería.
          </p>

          <a className={styles.link} href="#metodo">
            Conocé mi historia →
          </a>
        </div>

        <div className={styles.media}>
          <div className={styles.imagePlaceholder}>
            <span>Foto de Nicolás</span>
          </div>
        </div>

        <div className={styles.quoteWrapper}>
          <blockquote className={styles.quote}>
            “Entender lo que me pasaba no fue suficiente. El cambio empezó
            cuando dejé de postergar y empecé a actuar distinto.”
          </blockquote>
        </div>
      </Container>
    </section>
  );
}