import { Award, BookOpen, GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'Indian Institute of Technology',
    year: '2022 - 2026',
    gpa: '8.9 / 10.0',
    icon: GraduationCap
  }
];

const courses = [
  'Deep Learning & Neural Networks',
  'Natural Language Processing',
  'Computer Vision',
  'Machine Learning Algorithms',
  'Data Structures & Algorithms',
  'Statistical Methods',
  'Database Management Systems',
  'Big Data Analytics'
];

const achievements = [
  {
    title: 'Winner - National AI Hackathon 2024',
    description: 'Developed an AI-powered healthcare diagnostic tool',
    icon: Award
  },
  {
    title: 'Research Paper Published',
    description: 'Published in IEEE Conference on Machine Learning Applications',
    icon: BookOpen
  },
  {
    title: 'Dean\'s List',
    description: 'Maintained top 5% ranking for 4 consecutive semesters',
    icon: Award
  }
];

export const Education = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Education & Achievements</h2>
          <p className="text-xl text-muted-foreground">
            Academic background and recognition
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="glass-intense rounded-2xl p-8 space-y-4 transform transition-all duration-300 hover:scale-[1.02] hover:glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-3xl font-bold">{edu.degree}</h3>
                    <p className="text-xl text-accent">{edu.field}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span className="text-accent font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <h4 className="text-lg font-semibold">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {courses.map((course, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-center hover:border-accent/50 transition-colors"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 space-y-3 transform transition-all duration-300 hover:scale-105 hover:glow"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 w-fit">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
