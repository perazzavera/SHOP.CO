import "./header.css";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { LuCircleUserRound } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

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

  return (
    <section className="header">
      {/* Overlay para fechar o menu ao clicar fora */}
      <div
        className={`overlay ${menuAberto ? "ativo" : ""}`}
        onClick={() => setMenuAberto(false)} // Fecha o menu ao clicar no overlay
      ></div>

      <div className="header-entrar">
        <p>Sign up and get 20% off to your first order.</p>
        <a href="#Login" target="_blank">
          Sign Up Now
        </a>
      </div>
      <div>
        <div className="header-container">
          <div className="header-logo">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="menu-hamburguer"
            >
              <IoMenu size={32} color="#000000" />
            </button>

            {isMobile && (
              <ul className={`menu-lista ${menuAberto ? "aberto" : "fechado"}`}>
                <li>
                  <a target="_blank" href="#">
                    Shop
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    On Sale
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Brands
                  </a>
                </li>
              </ul>
            )}

            <h2>SHOP.CO</h2>
          </div>
          <nav className="header-links">
            <a target="_blank" href="#">
              Shop
            </a>
            <a target="_blank" href="#">
              On Sale
            </a>
            <a target="_blank" href="#">
              New Arrivals
            </a>
            <a target="_blank" href="#">
              Brands
            </a>
          </nav>
          <IoIosSearch
            className="lupa"
            size={25}
            color="hsla(0, 0%, 0%, 0.6)"
          />
          <input type="search" placeholder="Search for products..." />
          <nav className="header-icons">
            <a href="#Pesquisar">
              <IoIosSearch size={35} className="lupa-mobile" />
            </a>
            <a href="#Carrinho">
              <FiShoppingCart size={isMobile ? "30" : "20"} />
            </a>
            <a href="#Perfil">
              <LuCircleUserRound size={isMobile ? "30" : "20"} />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
