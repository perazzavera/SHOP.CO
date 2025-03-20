import "./Depoimentos.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Estrelas } from "../Estrelas";
import { useEffect } from "react";

const Depoimentos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const depoimentosClientes = [
    {
      nome: "Sarah M.",
      depoimento:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      nome: "Alex K.",
      depoimento:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      nome: "James L.",
      depoimento:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      nome: "Sarah M.",
      depoimento:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      nome: "Alex K.",
      depoimento:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      nome: "James L.",
      depoimento:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  const [slideAtual, setSlideAtual] = useState(0);

  return (
    <section className="depoimentos">
      <span className="depoimentos-titulo">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="depoimentos-btn">
          <FaArrowLeft
            className={slideAtual === 0 ? "botao-transparente" : ""}
            cursor="pointer"
            size={20}
            onClick={() => setSlideAtual((prev) => Math.max(prev - 1, 0))}
          />
          <FaArrowRight
            className={
              slideAtual === depoimentosClientes.length - 3
                ? "botao-transparente"
                : ""
            }
            cursor="pointer"
            size={20}
            onClick={() =>
              setSlideAtual((prev) =>
                Math.min(prev + 1, depoimentosClientes.length - 3)
              )
            }
          />
        </div>
      </span>
      <div
        className="depoimentos-container"
        style={{
          transform: isMobile
            ? `translateX(-${slideAtual * (21 + 2.2)}rem)`
            : `translateX(-${slideAtual * (21 + 4)}rem)`,
        }}
      >
        {depoimentosClientes.map((depoimento, index) => (
          <div
            className={`depoimentos-item ${
              index < slideAtual || index >= slideAtual + 3 ? "blur" : ""
            }`}
            key={index}
          >
            <Estrelas />
            <span className="item-descricao">
              <h3>{depoimento.nome}</h3>
              <IoCheckmarkCircle size={20} color="green" />
            </span>
            <p>{depoimento.depoimento}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
