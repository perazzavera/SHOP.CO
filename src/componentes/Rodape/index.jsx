import "./Rodape.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Rodape = () => {
  return (
    <section className="rodape">
      <div className="rodape-container">
        <div className="rodape-info">
          <h3>SHOP.CO</h3>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <nav className="rodape-sociais">
            <a href="#">
              <FaTwitter color="#000000" size={20} />
            </a>
            <a href="#">
              <FaFacebookF color="#FFFFFF" size={20} />
            </a>
            <a href="#">
              <FaInstagram color="#000000" size={20} />
            </a>
            <a href="#">
              <IoLogoGithub color="#000000" size={20} />
            </a>
          </nav>
        </div>
        <div className="rodape-listas-desktop">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="rodape-listas-desktop">
          <h4>HELP</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="rodape-listas-desktop">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries </li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div className="rodape-listas-desktop">
          <h4>RESOURCES</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial </li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="rodape-listas-mobile superior">
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries </li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
      <div className="rodape-listas-mobile inferior">
        <div>
          <h4>HELP</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial </li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="rodape-direitos">
        <p>
          Shop.co © Desenvolvido por <strong>Vera Lucia Perazza</strong>,
          Design de <strong>Hamza Naeem</strong>
        </p>
        <div>
          <img src="./visa.svg" alt="logo visa" />
          <img src="./mastercard.svg" alt="logo mastercard" />
          <img src="./paypal.svg" alt="logo paypal" />
          <img src="./applepay.svg" alt="logo apple pay" />
          <img src="./googlepay.svg" alt="logo google pay" />
        </div>
      </div>
    </section>
  );
};

export default Rodape;
