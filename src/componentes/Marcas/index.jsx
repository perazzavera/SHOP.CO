import { motion } from "framer-motion";
import "./Marcas.css";

const logos = [
  "./versace-logo.svg",
  "./zara-logo.svg",
  "./gucci-logo.svg",
  "./prada-logo.svg",
  "./calvin-logo.svg",
];

const Marcas = () => {
  return (
    <section className="marcas">
      <motion.div
        className="ticker-list"
        animate={{ x: ["0%", "-50%"] }} // Movemos apenas 50% para alinhar o final com o início
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Duplica a lista para criar o efeito de loop contínuo */}
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="marca" />
        ))}
      </motion.div>
    </section>
  );
};

export default Marcas;
