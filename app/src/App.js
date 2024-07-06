import './App.css';


function App() {
  return (
    <div className="container">
      <div className="nav">
        <p>Mikael Burgos</p>
      </div>
        <div className="main">
          <div className="principal-container">
          <div>
            <textarea 
            placeholder="Ingrese el text aqui"
            autocapitalize="none"
            required
            />
          </div>
            <p>Solo letras minúsculas y sin acentos</p>
            <div className="btn-container">
              <button className="btn contained">Encriptar</button>
              <button className="btn outlined">Desencriptar</button>
            </div>
            
          </div>
          <div>
            <div className="segundario-container">
              <img src={require("./assets/Muñeco.png")} alt="Muñeco"/>
              <h4>Ningun mensaje fue encontrado</h4>
              <p>Ingresa el text que deseas encriptar o desencriptar</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
