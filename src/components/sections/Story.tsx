'use client';

import { useRef, useState } from 'react';

import Container from '@/components/ui/Container';

import styles from './Story.module.css';

export default function Story() {
  const [storyOpen, setStoryOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const openStory = () => {
    setStoryOpen(true);
  };

  const closeStory = () => {
    setStoryOpen(false);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="historia"
    >
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Mi historia</h2>

          <p className={styles.subtitle}>
            De entenderme mucho a empezar a vivir distinto.
          </p>

          <p className={styles.description}>
            Durante años busqué respuestas en la introspección y el desarrollo
            personal. Entendía muchas cosas sobre mí, pero seguía postergando
            decisiones y repitiendo patrones que me alejaban de la vida que
            quería.
          </p>

          {!storyOpen && (
            <button
              type="button"
              className={styles.link}
              onClick={openStory}
              aria-expanded="false"
            >
              Conocé mi historia →
            </button>
          )}
        </div>

        <div className={styles.media}>
          <img
            className={styles.mainImage}
            src="/images/nicolas-historia.jpg"
            alt="Nicolás Dabinovic"
          />
        </div>

        <div className={styles.quoteWrapper}>
          <blockquote className={styles.quote}>
            “Entender lo que me pasaba no fue suficiente. El cambio empezó
            cuando dejé de postergar y empecé a actuar distinto.”
          </blockquote>
        </div>
      </Container>

      {storyOpen && (
        <div className={styles.expandedStory}>
          <Container className={styles.storyContainer}>
            <div className={styles.storyIntro}>
              <p className={styles.storyEyebrow}>Mi historia</p>

              <h3 className={styles.storyHeading}>
                Durante mucho tiempo pensé que estaba haciendo las cosas bien.
              </h3>

              <div className={styles.storyText}>
                <p>
                  Me esforzaba por ser un buen hombre, una buena pareja y
                  cumplir con todo lo que se esperaba de mí.
                </p>

                <p>
                  Trabajaba, resolvía problemas, cuidaba a los demás y trataba
                  de que todos estuvieran bien.
                </p>

                <p>Por afuera, mi vida funcionaba.</p>

                <p>
                  <strong>
                    Pero por dentro cada vez me sentía más cansado, más apagado
                    y más vacío.
                  </strong>
                </p>

                <p>
                  Había sueños y cosas que quería hacer que siempre quedaban
                  para “algún día”.
                </p>

                <p>Y ese día nunca llegaba.</p>
              </div>
            </div>

            <div className={styles.storyImageWrapper}>
              <img
                className={styles.storyImage}
                src="/images/historia-expandida.jpg"
                alt="Nicolás Dabinovic"
              />
            </div>

            <div className={styles.storyBlock}>
              <h3>Entonces empecé a buscar respuestas.</h3>

              <p>
                Terapia, libros, introspección. Quería entender por qué me
                sentía así.
              </p>

              <p>
                Empecé a reconocer mis patrones: por qué buscaba aprobación,
                por qué evitaba ciertos conflictos, por qué me costaba poner
                límites y por qué tantas veces priorizaba a los demás antes
                que a mí.
              </p>

              <p>Llegué a conocerme profundamente.</p>

              <p>Y pensé que entenderlo sería suficiente para cambiar.</p>

              <p>
                <strong>Pero no pasó.</strong>
              </p>

              <p>Entendía cada vez más.</p>

              <p>Y mi vida seguía igual.</p>
            </div>

            <div className={styles.storyBlock}>
              <h3>Hasta que la vida que había construido se rompió.</h3>

              <p>
                Mi relación terminó de una manera que no esperaba y muchas de
                las cosas que durante años había considerado seguras dejaron
                de existir.
              </p>

              <p>Me fui a España y empecé de nuevo.</p>

              <p>Pero pronto entendí algo:</p>

              <p>
                <strong>
                  podía cambiar de país, pero seguía llevándome conmigo.
                </strong>
              </p>

              <p>
                Mis miedos, mis inseguridades, mi necesidad de aprobación y mi
                dificultad para ponerme en primer lugar seguían ahí.
              </p>

              <p>
                Y por primera vez tuve que hacerme preguntas que durante mucho
                tiempo había evitado:
              </p>

              <div className={styles.questions}>
                <p>¿Qué quiero realmente?</p>

                <p>¿Qué hago por elección y qué hago por miedo?</p>

                <p>
                  ¿Cuánto de mi vida estoy viviendo para mí y cuánto para
                  agradar a los demás?
                </p>
              </div>
            </div>

            <div className={styles.storyBlock}>
              <h3>Ahí entendí de dónde venía ese vacío.</h3>

              <p>Había pasado años alejándome de mí mismo.</p>

              <p>No de golpe.</p>

              <p>
                <strong>En pequeñas decisiones, todos los días.</strong>
              </p>

              <p>
                Y entendí que conocer mis patrones no era suficiente. Tenía
                que aprender a elegir diferente cuando esos patrones
                aparecieran.
              </p>

              <p>Ahí empezó el verdadero cambio.</p>

              <p>
                Poco a poco dejé de vivir desde el miedo, la aprobación y lo
                que los demás esperaban de mí.
              </p>

              <p>
                Y empecé a construir una vida que realmente se sintiera mía.
              </p>
            </div>

            <div className={`${styles.storyBlock} ${styles.storyFinal}`}>
              <h3>Hoy puedo decir que volví a mí.</h3>

              <p>
                Sigo descubriéndome y creciendo, pero hoy me siento mucho más
                libre de esa cárcel mental en la que viví durante años.
              </p>

              <p>
                Y justamente porque sé lo que se siente estar ahí, hoy acompaño
                a otros hombres que están atravesando ese mismo lugar.
              </p>

              <p>
                De ese camino nació el <strong>Método RAÍZ</strong>.
              </p>

              <p>
                Un proceso para dejar de vivir desconectado de vos mismo, sanar
                aquello que te frena y recuperar la dirección de tu propia
                vida.
              </p>

              <div className={styles.finalStatement}>
                <p>
                  Porque quizás no necesitás convertirte en alguien nuevo.
                </p>

                <p>
                  Quizás necesitás volver a reconocer al hombre que fuiste
                  dejando para después.
                </p>
              </div>
            </div>

            <div className={styles.collapseWrapper}>
              <button
                type="button"
                className={styles.collapseButton}
                onClick={closeStory}
                aria-expanded="true"
              >
                Ver menos ↑
              </button>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}