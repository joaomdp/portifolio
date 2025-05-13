import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useRef, useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Inicializa o EmailJS quando o componente montar
    emailjs.init("OF43EEwMQrH-S2rP9"); // Substitua pela sua Public Key
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validação básica
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Por favor, insira um email válido.");
      return;
    }

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        "service_ng3wn9w", // Substitua pelo seu Service ID
        "template_0wiswwe", // Substitua pelo seu Template ID
        formRef.current
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Falha ao enviar email");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("error");
      setErrorMessage(
        "Erro ao enviar mensagem. Por favor, tente novamente mais tarde."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
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
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-darkGray/70 dark:text-light/70 max-w-2xl mx-auto text-lg"
          >
            Estou sempre aberto a novas oportunidades e parcerias. Vamos
            conversar!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-secondary/10 flex items-center justify-center">
                <MdEmail className="w-6 h-6 text-accent dark:text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-darkGray dark:text-light">
                  Email
                </h3>
                <p className="text-darkGray/70 dark:text-light/70">
                  joaomdp.dev@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-secondary/10 flex items-center justify-center">
                <MdLocationOn className="w-6 h-6 text-accent dark:text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-darkGray dark:text-light">
                  Localização
                </h3>
                <p className="text-darkGray/70 dark:text-light/70">
                  Arroio do Sal, Rio Grande do Sul
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-secondary/10 flex items-center justify-center">
                <MdPhone className="w-6 h-6 text-accent dark:text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-darkGray dark:text-light">
                  Telefone
                </h3>
                <p className="text-darkGray/70 dark:text-light/70">
                  (51) 99590-6640
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-darkGray dark:text-light font-medium"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-secondary"
                placeholder="Seu nome"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-darkGray dark:text-light font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-secondary"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-darkGray dark:text-light font-medium"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-secondary resize-none"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === "loading"}
              className={`btn-primary text-lg px-8 py-3 mt-4 ${
                status === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-sm mt-4"
              >
                Mensagem enviada com sucesso!
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-4"
              >
                {errorMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
