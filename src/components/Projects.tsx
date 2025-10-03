import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Neural Style Transfer',
    description: 'Deep learning application that applies artistic styles to images using CNNs. Implemented using TensorFlow and achieved 95% style accuracy.',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Python'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Sentiment Analysis Engine',
    description: 'NLP model for analyzing customer reviews with 92% accuracy. Uses BERT transformers for context-aware sentiment classification.',
    tags: ['NLP', 'BERT', 'PyTorch', 'Transformers'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'Machine learning system predicting equipment failures using time-series data. Reduced downtime by 40% in testing scenarios.',
    tags: ['Time Series', 'Random Forest', 'Scikit-learn', 'IoT'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Face Recognition System',
    description: 'Real-time face detection and recognition using deep learning. Implemented using OpenCV and custom trained CNN models.',
    tags: ['OpenCV', 'CNN', 'Computer Vision', 'Real-time'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Medical Image Classifier',
    description: 'CNN-based system for classifying medical images (X-rays, MRIs) with 94% accuracy. Helps in early disease detection.',
    tags: ['Healthcare', 'CNN', 'Transfer Learning', 'TensorFlow'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Chatbot with RAG',
    description: 'Intelligent chatbot using Retrieval-Augmented Generation for accurate, context-aware responses on technical documentation.',
    tags: ['LLM', 'RAG', 'LangChain', 'Vector DB'],
    github: '#',
    demo: '#'
  }
];

export const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            AI/ML projects showcasing practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 space-y-4 transform transition-all duration-300 hover:scale-105 hover:glow group"
            >
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md text-xs bg-primary/10 border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <Button size="sm" variant="outline" className="glass border-accent/50 hover:bg-accent/10">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
