import React, { useEffect, useState } from "react";
import { RatingStars } from "../Estrelas";
import "./Novidades.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Importe o CSS específico do Autoplay

const produtos = [
  {
    imagem: "./camiseta-preta.svg",
    descricao: "T-Shirt with Tape Details",
    avaliacao: <RatingStars />,
    precoAtual: "$120",
    precoAntigo: "",
    valorDesconto: "",
  },
  {
    imagem: "./calça-jeans.svg",
    descricao: "Skinny Fit Jeans",
    avaliacao: <RatingStars />,
    precoAtual: "$240",
    precoAntigo: "$260",
    valorDesconto: "-20%",
  },
  {
    imagem: "./camiseta-xadrez.svg",
    descricao: "Checkered Shirt",
    avaliacao: <RatingStars />,
    precoAtual: "$180",
    precoAntigo: "",
    valorDesconto: "",
  },
  {
    imagem: "./camiseta-raglan.svg",
    descricao: "Sleeve Striped T-Shirt",
    avaliacao: <RatingStars />,
    precoAtual: "$130",
    precoAntigo: "$160",
    valorDesconto: "-30%",
  },
];

const Novidades = () => {
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
    <section className="novidades">
      <h2>NEW ARRIVALS</h2>

      {isMobile ? (
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
              <div className="novidades-item">
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
        <div className="novidades-container">
          {produtos.map((produto, index) => (
            <div key={index} className="novidades-item">
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

      <div className="novidades-btn">
        <button>View All</button>
      </div>
    </section>
  );
};

export default Novidades;
