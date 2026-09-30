'use client';

import { useRef, useState } from 'react';
import { Check, X } from 'lucide-react';

import Container from '@/components/ui/Container';

import styles from './Program.module.css';

export default function Program() {
  const [programOpen, setProgramOpen] = useState(false);
  const programRef = useRef<HTMLDivElement>(null);

  const openProgram = () => {
    setProgramOpen(true);
  };

  const closeProgram = () => {
    setProgramOpen(false);

    requestAnimationFrame(() => {
      programRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  return (
    <section className={styles.section} id="programa">
      <Container className={styles.container}>
        <div className={styles.imagePlaceholder}>
          <span>Imagen</span>
        </div>

        <div className={styles.program} ref={programRef}>
          <h2 className={styles.title}>El programa</h2>

          <ul className={styles.list}>
            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>12 semanas de proceso</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>1 sesión grupal en vivo por semana</span>
            </li>

            <li>
              <Check size={17} strokeWidth={1.8} />
              <span>3 sesiones de coaching 1:1</span>
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

          {!programOpen && (
            <button
              type="button"
              className={styles.button}
              onClick={openProgram}
              aria-expanded="false"
            >
              Quiero conocer el programa →
            </button>
          )}
        </div>

        {programOpen && (
          <div className={styles.process}>
            <div className={styles.processIntro}>
              <p className={styles.processEyebrow}>El programa</p>

              <h3 className={styles.processTitle}>
                12 semanas de acompañamiento para trabajar en vos y llevar el
                cambio a tu vida real.
              </h3>
            </div>

            <div className={styles.processSection}>
              <h3>¿Qué incluye?</h3>

              <div className={styles.processGrid}>
                <article className={styles.processItem}>
                  <h4>1 sesión grupal en vivo por semana</h4>
                  <p>
                    Un espacio de trabajo y seguimiento para avanzar en el
                    proceso, trabajar los temas de cada etapa y compartir lo que
                    está pasando en tu vida.
                  </p>
                </article>

                <article className={styles.processItem}>
                  <h4>3 sesiones de coaching 1:1</h4>
                  <p>
                    Espacios individuales para profundizar en situaciones
                    personales, patrones, decisiones o vínculos que necesiten un
                    trabajo más específico.
                  </p>
                </article>

                <article className={styles.processItem}>
                  <h4>Acompañamiento por WhatsApp</h4>
                  <p>
                    Contacto durante todo el proceso para compartir situaciones,
                    hacer preguntas y recibir acompañamiento entre sesiones.
                  </p>
                </article>

                <article className={styles.processItem}>
                  <h4>Ejercicios prácticos semanales</h4>
                  <p>
                    Propuestas concretas para trabajar entre sesiones y llevar lo
                    aprendido a tu día a día.
                  </p>
                </article>

                <article className={styles.processItem}>
                  <h4>Integración emocional y acción real</h4>
                  <p>
                    Trabajamos lo que pasa dentro tuyo y, al mismo tiempo, cómo
                    llevar ese cambio a tus decisiones, vínculos y acciones.
                  </p>
                </article>
              </div>
            </div>

            <div className={styles.processSection}>
              <h3>Herramientas de trabajo</h3>

              <p className={styles.processLead}>
                Durante el proceso integramos diferentes enfoques según lo que
                necesites trabajar:
              </p>

              <div className={styles.toolsGrid}>
                <article className={styles.tool}>
                  <h4>Coaching ontológico</h4>
                  <p>
                    Para observar las historias, interpretaciones y formas de
                    actuar desde las que estás viviendo.
                  </p>
                </article>

                <article className={styles.tool}>
                  <h4>PNL</h4>
                  <p>
                    Para trabajar patrones de pensamiento, lenguaje y respuesta.
                  </p>
                </article>

                <article className={styles.tool}>
                  <h4>Trabajo de sombra</h4>
                  <p>
                    Para reconocer partes de vos que aprendiste a esconder,
                    rechazar o negar.
                  </p>
                </article>

                <article className={styles.tool}>
                  <h4>Niño interno</h4>
                  <p>
                    Para comprender y trabajar experiencias emocionales del
                    pasado que todavía pueden influir en cómo te relacionás con
                    vos mismo y con los demás.
                  </p>
                </article>

                <article className={styles.tool}>
                  <h4>Trabajo emocional</h4>
                  <p>
                    Para aprender a reconocer, atravesar y gestionar lo que
                    sentís sin quedar atrapado en tus reacciones automáticas.
                  </p>
                </article>
              </div>
            </div>

            <div className={styles.processFinal}>
              <h3>Un proceso para llevar el cambio a tu vida.</h3>

              <p>
                No se trata solamente de entender lo que te pasa.
              </p>

              <p>
                Se trata de <strong>trabajarlo, practicarlo y empezar a vivir diferente.</strong>
              </p>

              <a className={styles.processCta} href="#contacto">
                Agendar sesión de claridad →
              </a>
            </div>

            <div className={styles.collapseWrapper}>
              <button
                type="button"
                className={styles.collapseButton}
                onClick={closeProgram}
                aria-expanded="true"
              >
                Ver menos ↑
              </button>
            </div>
          </div>
        )}

        <div className={styles.audience}>
          <h2 className={styles.audienceTitle}>Para quién es</h2>

          <div className={styles.audienceBlock}>
            <p className={styles.label}>Es para vos si...</p>

            <ul className={styles.audienceList}>
              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Sentís que estás viviendo por debajo de tu potencial y querés
                  cambiarlo.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Te cuesta poner límites, elegirte y dejar de adaptarte para
                  agradar a otros.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Entendés lo que te pasa, pero seguís repitiendo los mismos
                  patrones.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Querés recuperar tu dirección, tus ganas y la sensación de
                  estar viviendo una vida que sentís tuya.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  <strong>
                    Estás dispuesto a mirarte con honestidad, asumir tu parte y
                    comprometerte de verdad con el proceso.
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.audienceBlock}>
            <p className={styles.label}>No es para vos si...</p>

            <ul className={styles.audienceList}>
              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Buscás una solución rápida o que alguien cambie las cosas por
                  vos.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Seguís esperando que los demás cambien para poder estar bien
                  vos.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Buscás culpables para explicar lo que te pasa, pero no estás
                  dispuesto a mirar qué podés hacer diferente.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Querés solamente entender lo que te pasa, pero no estás
                  dispuesto a llevarlo a la práctica.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  <strong>
                    Hoy no estás dispuesto a invertir tiempo, energía y recursos
                    en vos.
                  </strong>
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  <strong>
                    No estás dispuesto a comprometerte de verdad con un cambio.
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.audienceClosing}>
            <p className={styles.audienceStatement}>
              El cambio empieza cuando dejás de esperar que algo afuera cambie
              para empezar a hacerte cargo de lo que sí está en tus manos.
            </p>

            <p className={styles.audienceFinal}>
              No necesitás tener todo resuelto para empezar.
              <br />
              <strong>
                Pero sí necesitás estar dispuesto a hacer tu parte.
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}