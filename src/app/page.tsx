import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import FinalCta from '@/components/sections/FinalCta';
import Hero from '@/components/sections/Hero';
import Method from '@/components/sections/Method';
import Problem from '@/components/sections/Problem';
import Program from '@/components/sections/Program';
import Story from '@/components/sections/Story';
import Testimonials from '@/components/sections/Testimonials';
import Transformation from '@/components/sections/Transformation';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problem />
        <Story />
        <Transformation />
        <Method />
        <Program />
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}