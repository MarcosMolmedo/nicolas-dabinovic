'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

import styles from './Header.module.css';

const CONTACT_URL =
  'https://nicodabicoaching.taplink.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAUVCHpwZG9mAmZkaWQWUOYcHC0OTFxHrBk4hXhzCjIiWS5fPGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwroU2wVubaBrLzyL_S2JSqnEsqddKfIAzWfJpA2XsfaQTlYQMSCIL1OCjWB_aem_rn91BUAlCUAHfhUR3EdMeQ';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a
          href="#"
          className={styles.logo}
          aria-label="Nicolás Dabinovic - Inicio"
          onClick={closeMenu}
        >
          <span className={styles.logoName}>Nicolás</span>
          <span className={styles.logoSurname}>Dabinovic</span>
        </a>

        <nav
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ''
          }`}
          aria-label="Navegación principal"
        >
          <a href="#historia" onClick={closeMenu}>
            Mi historia
          </a>

          <a href="#metodo" onClick={closeMenu}>
            Método
          </a>

          <a href="#programa" onClick={closeMenu}>
            Programa
          </a>

          <a href="#testimonios" onClick={closeMenu}>
            Testimonios
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <div className={styles.mobileCta}>
            <Button
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar llamada
            </Button>
          </div>
        </nav>

        <div className={styles.desktopCta}>
          <Button
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar llamada
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </Container>
    </header>
  );
}