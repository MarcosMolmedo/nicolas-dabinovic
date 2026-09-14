import Container from '@/components/ui/Container';

import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12c0-2.2-.2-4.1-.5-5.1a2.8 2.8 0 0 0-2-2C17 4.5 14.5 4.4 12 4.4s-5 .1-6.5.5a2.8 2.8 0 0 0-2 2C3.2 7.9 3 9.8 3 12s.2 4.1.5 5.1a2.8 2.8 0 0 0 2 2c1.5.4 4 .5 6.5.5s5-.1 6.5-.5a2.8 2.8 0 0 0 2-2c.3-1 .5-2.9.5-5.1Z" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.2 2.4.8.5 1.4.7 1.7.8.2.1.4 0 .6-.2l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.7.6-1.6.9-2.7.7-1.1-.2-2.5-.7-4.3-1.8-1.5-1-2.7-2.2-3.6-3.6-.8-1.2-1.3-2.5-1.4-3.4-.1-.8.2-1.5.8-2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <a
            className={styles.brand}
            href="#"
            aria-label="Nicolás Dabinovic - Inicio"
          >
            NICOLÁS DABINOVIC
          </a>

          <nav className={styles.navigation} aria-label="Navegación del pie">
            <a href="#">Inicio</a>
            <a href="#historia">Sobre mí</a>
            <a href="#programa">Programa</a>

            <a
              href="https://nicodabicoaching.taplink.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAUVCHpwZG9mAmZkaWQWUOYcHC0OTFxHrBk4hXhzCjIiWS5fPGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwroU2wVubaBrLzyL_S2JSqnEsqddKfIAzWfJpA2XsfaQTlYQMSCIL1OCjWB_aem_rn91BUAlCUAHfhUR3EdMeQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </nav>

          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/nico.dabi?stkn=NnZ5cWRkcGVybHB4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Nicolás Dabinovic"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.youtube.com/watch?v=ZQXT_TNrKVs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Nicolás Dabinovic"
            >
              <YouTubeIcon />
            </a>

            <a
              href="https://wa.me/543519152989"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a Nicolás Dabinovic por WhatsApp"
            >
              <WhatsAppIcon />
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