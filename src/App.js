import "./App.css";
import Apresentacao from "./componentes/Apresentacao";
import Contato from "./componentes/Contato";
import Depoimentos from "./componentes/Depoimentos";
import Estilos from "./componentes/Estilos";
import Header from "./componentes/header";
import Marcas from "./componentes/Marcas";
import Novidades from "./componentes/Novidades";
import Populares from "./componentes/Populares";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentacao />
      <Marcas />
      <Novidades />
      <Populares />
      <Estilos />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
