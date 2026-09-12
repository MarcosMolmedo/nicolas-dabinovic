import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a href="#" className={styles.logo} aria-label="Nicolás Dabinovic - Inicio">
          <span className={styles.logoName}>Nicolás</span>
          <span className={styles.logoSurname}>Dabinovic</span>
        </a>

        <nav className={styles.navigation} aria-label="Navegación principal">
          <a href="#historia">Mi historia</a>
          <a href="#metodo">Método</a>
          <a href="#programa">Programa</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className={styles.desktopCta}>
          <Button href="#contacto">Agendar llamada</Button>
        </div>
      </Container>
    </header>
  );
}