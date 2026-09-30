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
          <p className={styles.eyebrow}>Lo que empezás a recuperar</p>

          <h2 className={styles.title}>
            Volver a sentir
            <br />
            que tu vida es tuya.
          </h2>

          <div className={styles.intro}>
            <p>
              Cuando dejás de vivir desconectado de vos mismo, no solo cambia
              lo que hacés.
            </p>

            <p>
              <strong>Cambia cómo se siente vivir tu propia vida.</strong>
            </p>

            <p>Empezás a recuperar esa sensación de que:</p>
          </div>
        </div>

        <div className={styles.benefits}>
          <article className={styles.benefit}>
            <Heart size={28} strokeWidth={1.5} />

            <h3>Lo que hacés es suficiente</h3>

            <p>
              Dejás de sentir que siempre tenés que hacer un poco más para
              merecer reconocimiento, amor o tranquilidad.
            </p>
          </article>

          <article className={styles.benefit}>
            <Sparkles size={28} strokeWidth={1.5} />

            <h3>Podés ser vos</h3>

            <p>
              Sin estar pendiente de qué esperan los demás de vos. Sin tener
              que demostrar todo el tiempo que sos suficiente.
            </p>
          </article>

          <article className={styles.benefit}>
            <HeartHandshake size={28} strokeWidth={1.5} />

            <h3>Podés querer sin perderte</h3>

            <p>
              Disfrutás de tus vínculos sin sentir que tenés que dejarte de
              lado para que el otro esté bien.
            </p>
          </article>

          <article className={styles.benefit}>
            <Compass size={28} strokeWidth={1.5} />

            <h3>Sabés hacia dónde vas</h3>

            <p>
              Volvés a tener ganas de hacer cosas por vos. Recuperás proyectos,
              deseos y esa sensación de estar construyendo una vida que
              realmente querés vivir.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}