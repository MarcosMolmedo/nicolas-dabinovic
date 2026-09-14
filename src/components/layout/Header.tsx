'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

import styles from './Header.module.css';

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
            <Button href="#contacto">Agendar llamada</Button>
          </div>
        </nav>

        <div className={styles.desktopCta}>
          <Button href="#contacto">Agendar llamada</Button>
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