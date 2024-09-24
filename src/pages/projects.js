import Navbar from '../app/components/Navbar';
import ProjectCard from '../app/components/ProjectCard';
import Footer from '../app/components/Footer';
import '../app/globals.css';


export default function Projects() {
  const projects = [
    {
      title: 'Behavioral Measurement Toolbox',
      description: 'Toolbox development for advanced behavioral studies.',
      tech: 'React, Tailwind CSS',
      link: 'https://github.com/prathmesh3235/behavioral-toolbox',
    },
    {
      title: 'E-commerce Website',
      description: 'Developed with AR, 3D models, and advanced tracking features.',
      tech: 'React, Firebase',
      link: 'https://github.com/prathmesh3235/e-commerce',
    },
    {
      title: 'Azernis GmbH Landing Page',
      description: 'Landing page design and implementation for Azernis GmbH.',
      tech: 'Next.js, Tailwind CSS, Docker',
      link: 'https://azernis.com',
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
