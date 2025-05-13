import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-light dark:bg-primary transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="text-darkGray/70 dark:text-light/70 text-sm">
            © {new Date().getFullYear()} João Manoel. Todos os direitos
            reservados.
          </p>
          <p className="text-darkGray/70 dark:text-light/70 text-sm mt-2">
            <a
              href="https://github.com/joaomanoel7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-secondary hover:underline"
            >
              @joaomanoel7
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
