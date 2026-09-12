import Container from '@/components/ui/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <a className={styles.brand} href="#" aria-label="Nicolás Dabinovic">
            NICOLÁS DABINOVIC
          </a>

          <nav className={styles.navigation} aria-label="Navegación del pie">
            <a href="#">Inicio</a>
            <a href="#historia">Sobre mí</a>
            <a href="#programa">Programa</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>

            <a href="#" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Nicolás Dabinovic. Todos los derechos reservados.</p>

          <p>
            Diseñado y desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/marcos-manuel-olmedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcos M Olmedo
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}