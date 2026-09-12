import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonios">
      <Container className={styles.container}>
        <h2 className={styles.title}>Testimonios</h2>

        <div className={styles.testimonial}>
          <div className={styles.avatar} aria-hidden="true">
            <span>Foto</span>
          </div>

          <div className={styles.content}>
            <blockquote className={styles.quote}>
              “Una guía clara, humana y profunda. Me ayudó a reconectar conmigo
              y a tomar decisiones que venía postergando.”
            </blockquote>

            <p className={styles.author}>— Cliente</p>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <button
            className={styles.control}
            type="button"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className={styles.dots} aria-hidden="true">
          <span className={styles.activeDot} />
          <span />
          <span />
        </div>
      </Container>
    </section>
  );
}