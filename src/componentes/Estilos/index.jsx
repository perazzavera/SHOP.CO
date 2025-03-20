import "./Estilos.css";

const Estilos = () => {
  return (
    <section className="estilos">
      <h2>BROWSE BY DRESS STYLE</h2>
      <div className="estilos-container">
        <div className="linha-superior">
          <div className="casual">
            <a href="#">
              <img src="./casual.svg" />
            </a>
          </div>
          <div className="formal">
            <a href="#">
              <img src="./formal.svg" />
            </a>
          </div>
        </div>
        <div className="linha-inferior">
          <div className="festa">
            <a href="#">
              <img src="./festa.svg" />
            </a>
          </div>
          <div className="gym">
            <a href="#">
              <img src="./fit.svg" />
            </a>
          </div>
        </div>
        <div className="lista-estilos-mobile">
          <a href="#">
            <img src="./casual-mobile.svg" />
          </a>
          <a href="#">
            <img src="./formal-mobile.svg" />
          </a>
          <a href="#">
            <img src="./festa-mobile.svg" />
          </a>
          <a href="#">
            <img src="./fit-mobile.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Estilos;
