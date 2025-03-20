import "./Apresentacao.css";
import banner from "../../assets/banner.svg";
import bannerMobile from "../../assets/banner-mobile.svg";
import { useEffect, useState } from "react";

const Apresentacao = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Verifica o tamanho da tela ao carregar o componente
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: isMobile ? "none" : `url(${banner})`,
      }}
      className="apresentacao"
    >
      <div className="apresentacao-container">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <img
          className="estrela-menor"
          src="./estrela-menor.svg"
          alt="icone estrela"
        />
        <img
          className="estrela-maior"
          src="./estrela-maior.svg"
          alt="icone-estrela"
        />
        <button>Shop Now</button>
        <div className="apresentacao-metricas">
          <span>
            <h3>200+</h3>
            <p>International Brands</p>
          </span>
          <span>
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </span>
          <span>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </span>
        </div>
      </div>
      <div className="banner-mobile">
        <img src={bannerMobile} alt="banner mobile" />
      </div>
    </section>
  );
};

export default Apresentacao;
