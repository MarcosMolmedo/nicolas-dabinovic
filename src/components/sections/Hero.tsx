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
            Recuperar
            <br />
            tu poder
          </h1>

          <p className={styles.description}>
            Volvé a sentir que sos un hombre de valor.
          </p>

          <Button
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sesión de claridad gratuita →
          </Button>

          <p className={styles.note}>
            Sin compromiso · Online · 30 minutos
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.videoWrapper}>
           
           <video
         className={styles.video}
         src="/videos/Video-Nicolas.mp4"
         poster="/images/video-nicolas-poster-6.jpg"
         controls
         playsInline
         preload="metadata"
>.         </video>
          </div>

          <div className={styles.videoText}>
            <strong>¿Sentís que te perdiste a vos mismo?</strong>
            <span>Te cuento por dónde empezar a recuperarte.</span>
          </div>
        </div>

        <aside className={styles.side}>
          <div className={styles.keywords}>
            <span>Sanar</span>
            <span>Recuperar</span>
            <span>Dirigir</span>
          </div>

          <p className={styles.sidePhrase}>
            Dejar de sobrevivir. Empezar a dirigir.
          </p>
        </aside>
      </Container>
    </section>
  );
}