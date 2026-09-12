import { Check, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import styles from './Program.module.css';

export default function Program() {
  return (
    <section className={styles.section} id="programa">
      <Container className={styles.container}>
        <div className={styles.imagePlaceholder}>
          <span>Imagen</span>
        </div>

        <div className={styles.program}>
          <h2 className={styles.title}>El programa</h2>

          <ul className={styles.list}>
            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>8 semanas de proceso</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>1 sesión grupal en vivo por semana</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>2 sesiones de coaching 1:1</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>Acompañamiento por WhatsApp</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>Ejercicios prácticos semanales</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>Integración emocional y acción real</span>
            </li>
          </ul>

          <a className={styles.button} href="#contacto">
            Quiero conocer el programa →
          </a>
        </div>

        <div className={styles.audience}>
          <h2 className={styles.title}>Para quién es</h2>

          <p className={styles.label}>Es para vos si...</p>

          <ul className={styles.list}>
            <li>
              <Check size={16} strokeWidth={1.8} />
              <span>Querés dejar de abandonarte para sostener vínculos</span>
            </li>

            <li>
              <Check size={16} strokeWidth={1.8} />
              <span>Te cuesta poner límites sin sentir culpa</span>
            </li>

            <li>
              <Check size={16} strokeWidth={1.8} />
              <span>Querés sentirte más firme emocionalmente</span>
            </li>
          </ul>

          <p className={styles.label}>No es para vos si...</p>

          <ul className={styles.list}>
            <li>
              <X size={16} strokeWidth={1.8} />
              <span>Buscás soluciones mágicas o instantáneas</span>
            </li>

            <li>
              <X size={16} strokeWidth={1.8} />
              <span>No estás dispuesto a practicar fuera de las sesiones</span>
            </li>

            <li>
              <X size={16} strokeWidth={1.8} />
              <span>No tenés una intención real de cambiar</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}