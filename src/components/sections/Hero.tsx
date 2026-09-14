import { Play } from 'lucide-react';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import styles from './Hero.module.css';

const CONTACT_URL =
  'https://nicodabicoaching.taplink.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAUVCHpwZG9mAmZkaWQWUOYcHC0OTFxHrBk4hXhzCjIiWS5fPGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwroU2wVubaBrLzyL_S2JSqnEsqddKfIAzWfJpA2XsfaQTlYQMSCIL1OCjWB_aem_rn91BUAlCUAHfhUR3EdMeQ';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Es momento de</p>

          <h1 className={styles.title}>
            Volver
            <br />
            a vos.
          </h1>

          <p className={styles.description}>
            Dejá de perderte para sostener a los demás.
            <br />
            Recuperá tu voz, tus límites y tu dirección.
          </p>

          <Button
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar llamada gratis →
          </Button>

          <p className={styles.note}>
            Sin compromiso · Online · 30 minutos
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playButton} aria-hidden="true">
              <Play size={28} fill="currentColor" />
            </div>

            <div className={styles.videoText}>
              <strong>Mirá mi video</strong>
              <span>Conocé cómo puedo ayudarte</span>
            </div>
          </div>
        </div>

        <aside className={styles.side}>
          <div className={styles.keywords}>
            <span>Claridad</span>
            <span>Calma</span>
            <span>Dirección</span>
          </div>

          <p className={styles.sidePhrase}>
            Más dirección. Más vida.
          </p>
        </aside>
      </Container>
    </section>
  );
}