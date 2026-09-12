import Container from '@/components/ui/Container';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="contacto">
      <Container className={styles.container}>
        <h2 className={styles.title}>
          Tu próxima versión empieza
          <br />
          con una conversación.
        </h2>

        <a className={styles.button} href="#">
          Quiero reservar mi sesión de claridad →
        </a>

        <p className={styles.description}>
          Una conversación para entender qué te está frenando y ver si este
          proceso es para vos.
        </p>
      </Container>
    </section>
  );
}