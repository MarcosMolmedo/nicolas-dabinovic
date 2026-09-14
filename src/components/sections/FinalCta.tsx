import Container from '@/components/ui/Container';

import styles from './FinalCta.module.css';

const CONTACT_URL =
  'https://nicodabicoaching.taplink.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAUVCHpwZG9mAmZkaWQWUOYcHC0OTFxHrBk4hXhzCjIiWS5fPGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwroU2wVubaBrLzyL_S2JSqnEsqddKfIAzWfJpA2XsfaQTlYQMSCIL1OCjWB_aem_rn91BUAlCUAHfhUR3EdMeQ';

export default function FinalCta() {
  return (
    <section className={styles.section} id="contacto">
      <Container className={styles.container}>
        <h2 className={styles.title}>
          Tu próxima versión empieza
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