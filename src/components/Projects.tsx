import { motion } from "framer-motion";
import { useState } from "react";
import placeholderImage from "../assets/images/placeholder.svg";
import ecommerceImage from "../assets/images/ecomerce.png";
import openweatherImage from "../assets/images/openweather.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  status: "completed" | "in-progress";
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: "E-Commerce",
    description:
      "Um projeto mobile moderno desenvolvido com Flutter, focado em performance e experiência do usuário.",
    image: ecommerceImage,
    technologies: ["Flutter", "Dart", "Provider"],
    link: "https://github.com/joaomdp/Project-e-commerce",
    status: "completed",
  },
  {
    title: "OpenWeather",
    description:
      "Projeto de uma aplicação mobile que consome a API do OpenWeather, desenvolvido com Kotlin e Retrofit.",
    image: openweatherImage,
    technologies: ["Kotlin", "OpenWeather API", "Retrofit"],
    link: "https://github.com/joaomdp/Project-Kotlin",
    status: "completed",
  },
  {
    title: "Alugoat",
    description:
      "Projeto de gerenciamento de alugueis de maquinários, desenvolvido com React, tailwind e firebase.",
    image: placeholderImage,
    technologies: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/joaomdp/pds",
    status: "in-progress",
  },
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white dark:bg-darkGray rounded-lg overflow-hidden shadow-lg relative"
    >
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === "completed"
              ? "bg-green-500/10 text-green-500"
              : "bg-yellow-500/10 text-yellow-500"
          }`}
        >
          {project.status === "completed" ? "Concluído" : "Em Desenvolvimento"}
        </span>
      </div>
      <div className="relative h-48">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <span className="text-accent dark:text-secondary text-lg font-semibold">
              Imagem não disponível
            </span>
          </div>
        ) : (
          <div className="w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
          className="text-xl font-semibold text-darkGray dark:text-light mb-2"
        >
          {project.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          className="text-darkGray/70 dark:text-light/70 mb-4"
        >
          {project.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accent/10 dark:bg-secondary/10 text-accent dark:text-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary text-sm px-6 py-2"
        >
          Ver no GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center bg-light dark:bg-primary transition-colors duration-300 py-20"
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-darkGray dark:text-light mb-4"
          >
            Meus Projetos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-darkGray/70 dark:text-light/70 max-w-2xl mx-auto text-lg mb-8"
          >
            Confira alguns dos meus projetos mais recentes e descubra como posso
            ajudar a transformar suas ideias em realidade.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
