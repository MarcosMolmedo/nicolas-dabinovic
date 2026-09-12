import {
  Compass,
  Heart,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import styles from './Transformation.module.css';

export default function Transformation() {
  return (
    <section className={styles.section} id="transformacion">
      <Container className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Una nueva versión de vos</p>

          <h2 className={styles.title}>
            Más claridad.
            <br />
            Más calma. Más vida.
          </h2>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <Heart size={28} strokeWidth={1.5} />
            <span>Tu voz</span>
          </div>

          <div className={styles.benefit}>
            <Sparkles size={28} strokeWidth={1.5} />
            <span>Tus límites</span>
          </div>

          <div className={styles.benefit}>
            <HeartHandshake size={28} strokeWidth={1.5} />
            <span>Tus vínculos</span>
          </div>

          <div className={styles.benefit}>
            <Compass size={28} strokeWidth={1.5} />
            <span>Tu dirección</span>
          </div>
        </div>
      </Container>
    </section>
  );
}