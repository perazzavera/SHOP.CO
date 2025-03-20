import "./Contato.css";
import { TfiEmail } from "react-icons/tfi";

const Contato = () => {
  return (
    <section className="contato">
      <div className="contato-container">
        <div className="contato-titulo">
          <h2>
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
        </div>
        <div className="form">
          <input type="e-mail" placeholder="Enter your email address" />
          <TfiEmail className="icone" color="hsla(0, 0%, 0%, 0.4)" />
          <button className="contato-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </section>
  );
};

export default Contato;
