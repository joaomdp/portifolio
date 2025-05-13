import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
  SiFlutter,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Flutter", icon: SiFlutter },
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: VscCode },
  { name: "Figma", icon: SiFigma },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-lightGray dark:bg-primary transition-colors duration-300 py-20"
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
            Sobre Mim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-darkGray/70 dark:text-light/70 max-w-2xl mx-auto text-lg mb-8"
          >
            Sou um desenvolvedor front-end criativo, apaixonado por criar
            interfaces que proporcionam experiências únicas e memoráveis. Meu
            foco está em transformar ideias em aplicações intuitivas e
            agradáveis para o usuário.
          </motion.p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl font-bold text-darkGray dark:text-light text-center mb-8"
        >
          Tech Stack
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center p-4 bg-white dark:bg-darkGray rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-accent dark:text-secondary mb-2" />
                </motion.div>
                <p className="text-darkGray/70 dark:text-light/70 text-sm text-center">
                  {tech.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
