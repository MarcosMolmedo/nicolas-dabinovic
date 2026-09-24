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
          <h2 className={styles.audienceTitle}>Para quién es</h2>

          <div className={styles.audienceBlock}>
            <p className={styles.label}>Es para vos si...</p>

            <ul className={styles.audienceList}>
              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Decís que sí cuando en realidad querés decir que no.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Te cuesta poner límites por miedo a generar conflicto,
                  decepcionar o perder a alguien.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Sobrepensás mensajes, silencios, cambios de actitud o
                  cualquier señal de distancia.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Sentís ansiedad cuando alguien importante para vos se aleja o
                  no responde como esperabas.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Necesitás aprobación o validación externa para sentirte
                  tranquilo o seguro.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Te adaptás demasiado a los demás y terminás dejando de lado
                  lo que vos necesitás.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Reconocés que repetís ciertos patrones en tus vínculos, pero
                  no sabés cómo salir de ellos.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Entendés muchas cosas racionalmente, pero en el momento volvés
                  a reaccionar de la misma manera.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Estás cansado de abandonarte para sostener relaciones y
                  querés aprender a vincularte sin perderte a vos mismo.
                </span>
              </li>

              <li>
                <Check size={17} strokeWidth={1.8} />
                <span>
                  Estás dispuesto a mirarte con honestidad, practicar y hacer
                  cambios concretos.
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
                  Buscás una solución rápida o una fórmula mágica que cambie tu
                  vida sin involucrarte en el proceso.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Esperás que cambien los demás para recién entonces sentirte
                  mejor vos.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  No estás dispuesto a cuestionar patrones, creencias o formas
                  de vincularte que repetís hace tiempo.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Querés evitar cualquier conversación, decisión o emoción que
                  te genere incomodidad.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  No estás dispuesto a practicar fuera de las sesiones y llevar
                  lo trabajado a tu vida cotidiana.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  Buscás solamente entender por qué te pasa algo, pero no estás
                  dispuesto a hacer algo diferente con eso.
                </span>
              </li>

              <li>
                <X size={17} strokeWidth={1.8} />
                <span>
                  No tenés hoy una intención real de asumir responsabilidad por
                  tu proceso de cambio.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}