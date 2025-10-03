import { ScrollVideo } from '@/components/ScrollVideo';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

const Index = () => {
  const videoUrl = '/portfolio-video.mp4';

  return (
    <div className="relative">
      <ScrollVideo videoUrl={videoUrl} duration={268} />
      
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
