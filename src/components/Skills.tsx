import { Brain, Code2, Database, GitBranch, Layers, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Machine Learning',
    icon: Brain,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost']
  },
  {
    category: 'Programming',
    icon: Code2,
    items: ['Python', 'R', 'C++', 'JavaScript', 'Java']
  },
  {
    category: 'Deep Learning',
    icon: Layers,
    items: ['CNNs', 'RNNs', 'GANs', 'Transformers', 'LSTM']
  },
  {
    category: 'Data Science',
    icon: Database,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'SQL', 'MongoDB']
  },
  {
    category: 'Tools & Platforms',
    icon: Terminal,
    items: ['Jupyter', 'Git', 'Docker', 'AWS', 'Google Colab']
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Agile']
  }
];

export const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 space-y-4 transform transition-all duration-300 hover:scale-105 hover:glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-secondary/50 border border-border/50 hover:border-accent/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
