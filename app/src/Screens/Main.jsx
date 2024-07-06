import { Button } from '../components/Button';
import { Div } from '../components/Div';
export const Main = () => {
  return (
    <Div className="main">
      <Div className="principal-container">
      <Div>
        <textarea 
        placeholder="Ingrese el text aqui"
        autocapitalize="none"
        required
        />
      </Div>
        <p>Solo letras minúsculas y sin acentos</p>
        <Div className="btn-container">
          <Button className="btn primary" text="Encriptar"/>
          <Button className="btn secondary" text="Desencriptar"/>
        </Div>
            
      </Div>
      <Div>
        <Div className="segundario-container">
          <img src={require("../assets/Muñeco.png")} alt="Muñeco"/>
          <h4>Ningun mensaje fue encontrado</h4>
          <p>Ingresa el text que deseas encriptar o desencriptar</p>
        </Div>
      </Div>
    </Div>
  )
} 
