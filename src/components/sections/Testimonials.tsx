
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      'Criterio y perspectiva. Me ayuda a bajar a la tierra los problemas. Logro destrabar temas que solo me llevarían semanas de sobrepensar.',
    author: 'Valentín Vallespinos',
    image: '/images/valentin-testimonio.jpg',
    emoji: null,
  },
  {
    quote:
      'Lo que me llevo de cada conversación es la sensación de salir siempre con la mente más clara y liviana. Valoro muchísimo tu empatía y esa visión tan lúcida que tenés para ayudarme a encontrarle la vuelta a cualquier problema o inquietud.',
    author: 'Juan Cruz González',
    image: '/images/juan-cruz-testimonio.jpg',
    emoji: null,
  },
  
  {
  quote:
    'Después de cada charla me llevo una mirada diferente de las cosas, más claridad y tranquilidad. Me ayudás a ordenar mis ideas, ver las situaciones desde otra perspectiva y encontrar mis propias respuestas. Es algo que valoro muchísimo.',
  author: 'Marcos M',
  image: null,
  emoji: '🙋‍♂️',
},

];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  return (
    <section className={styles.section} id="testimonios">
      <Container className={styles.container}>
        <h2 className={styles.title}>Testimonios</h2>

        <div className={styles.testimonial} aria-live="polite">
          <div className={styles.avatar} aria-hidden="true">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt=""
                width={72}
                height={72}
                className={styles.avatarImage}
              />
            ) : (
              <span className={styles.avatarEmoji}>
                {testimonial.emoji}
              </span>
            )}
          </div>

          <div className={styles.content}>
            <blockquote className={styles.quote}>
              “{testimonial.quote}”
            </blockquote>

            <p className={styles.author}>
              — {testimonial.author}
            </p>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Testimonio anterior"
            onClick={previous}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <button
            className={styles.control}
            type="button"
            aria-label="Siguiente testimonio"
            onClick={next}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className={styles.dots} aria-hidden="true">
          {testimonials.map((item, index) => (
            <span
              key={item.author}
              className={
                index === activeIndex ? styles.activeDot : ''
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
