import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="glass-intense rounded-3xl p-12 max-w-4xl w-full transform transition-all duration-700 hover:scale-[1.02] glow">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-accent text-lg font-medium">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">
              Alex Thompson
            </h1>
            <p className="text-2xl text-muted-foreground">
              AI/ML Engineering Student
            </p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Third-year BTech student specializing in Artificial Intelligence and Machine Learning. 
            Passionate about building intelligent systems that solve real-world problems through 
            deep learning, computer vision, and natural language processing.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" className="glass border-accent/50 hover:bg-accent/10">
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
