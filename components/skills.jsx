"use client";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "Go-Lang", "SQL"],
  },
  {
    title: "AI/ML",
    skills: ["Deep Learning", "TensorFlow", "Scikit-learn", "CNNs"],
  },
  {
    title: "Web",
    skills: ["React.js", "Next.js", "HTML/CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "MySQL", "Linux", "WatsonX"],
  },
];

const certifications = [
  { name: "Deep Learning Fundamentals", org: "NVIDIA", year: "2024" },
  { name: "React.js and Next.js", org: "GDG", year: "2024" },
  { name: "GenAI with WatsonX", org: "IBM", year: "2025" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-card/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border/50 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 md:p-6 rounded-xl bg-background/50 border border-border/50">
          <h3 className="text-sm font-semibold text-foreground mb-4">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                  {cert.org[0]}
                </div>
                <div className="min-w-0">
                  
                  <p className="text-xs font-medium text-foreground truncate">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.org} - {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
