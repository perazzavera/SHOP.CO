import React, { useEffect, useState } from "react";
import { RatingStars } from "../Estrelas";
import "./Populares.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Importe o CSS do Autoplay

const produtos = [
  {
    imagem: "./camisa-listras.svg",
    descricao: "Vertical Striped Shirt",
    avaliacao: <RatingStars />,
    precoAtual: "$212",
    precoAntigo: "$232",
    valorDesconto: "-20%",
  },
  {
    imagem: "./camiseta-laranja.svg",
    descricao: "Courage Graphic T-Shirt",
    avaliacao: <RatingStars />,
    precoAtual: "$145",
    precoAntigo: "",
    valorDesconto: "",
  },
  {
    imagem: "./bermuda-jeans.svg",
    descricao: "Loose Fit Bermuda Shorts",
    avaliacao: <RatingStars />,
    precoAtual: "$80",
    precoAntigo: "",
    valorDesconto: "",
  },
  {
    imagem: "./calça-preta.svg",
    descricao: "Faded Skinny Jeans",
    avaliacao: <RatingStars />,
    precoAtual: "$210",
    precoAntigo: "",
    valorDesconto: "",
  },
];

const Populares = () => {
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
    <section className="populares">
      <h2>TOP SELLING</h2>

      {isMobile ? (
        // Carrossel para mobile
        <Swiper
          modules={[Autoplay]} // Adiciona o módulo Autoplay
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500, // Tempo entre os slides (2.5 segundos)
            disableOnInteraction: false, // Continua o autoplay após interação do usuário
          }}
          loop={true} // Ativa o loop infinito
        >
          {produtos.map((produto, index) => (
            <SwiperSlide key={index}>
              <div className="populares-item">
                <img src={produto.imagem} alt={produto.descricao} />
                <div className="produto-info">
                  <h3>{produto.descricao}</h3>
                  <div className="avaliacao">{produto.avaliacao}</div>
                  <div className="precos">
                    <span className="preco-atual">{produto.precoAtual}</span>
                    {produto.precoAntigo && (
                      <span className="preco-antigo">
                        {produto.precoAntigo}
                      </span>
                    )}
                    {produto.valorDesconto && (
                      <span className="desconto">{produto.valorDesconto}</span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Grade para desktop
        <div className="populares-container">
          {produtos.map((produto, index) => (
            <div key={index} className="populares-item">
              <img src={produto.imagem} alt={produto.descricao} />
              <div className="produto-info">
                <h3>{produto.descricao}</h3>
                <div className="avaliacao">{produto.avaliacao}</div>
                <div className="precos">
                  <span className="preco-atual">{produto.precoAtual}</span>
                  {produto.precoAntigo && (
                    <span className="preco-antigo">{produto.precoAntigo}</span>
                  )}
                  {produto.valorDesconto && (
                    <span className="desconto">{produto.valorDesconto}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="populares-btn">
        <button>View All</button>
      </div>
    </section>
  );
};

export default Populares;
