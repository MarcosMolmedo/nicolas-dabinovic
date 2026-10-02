import Container from '@/components/ui/Container';

import styles from './FinalCta.module.css';

const CONTACT_URL =
  'https://calendly.com/nicodabicoaching/sesion-de-claridad-1-1-gratuita?month=2026-10';

export default function FinalCta() {
  return (
    <section className={styles.section} id="contacto">
      <Container className={styles.container}>
        <h2 className={styles.title}>
          El cambio empieza
          <br />
          con una conversación.
        </h2>

        <a
          className={styles.button}
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
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