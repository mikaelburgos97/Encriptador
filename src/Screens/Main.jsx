import { useState } from 'react';
  import { FaCopy } from 'react-icons/fa';
  import { Button } from '../components/Button';
  import { Div } from '../components/Div';

  export const Main = () => {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const encrypt = (text) => {
      const mapping = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
      };
      return text.replace(/[aeiou]/g, (match) => mapping[match]);
    };

    const decrypt = (text) => {
      const mapping = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
      };
      return text.replace(/enter|imes|ai|ober|ufat/g, (match) => mapping[match]);
    };

    const handleChange = (event) => {
      const inputText = event.target.value;
      setText(inputText);
    };

    const handleEncrypt = () => {
      const output = encrypt(text);
      setEncryptedText(output);
    };

    const handleDecrypt = () => {
      const output = decrypt(text);
      setEncryptedText(output);
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(encryptedText);
    };

    return (
      <Div className="main">
        <Div className="principal-container">
          <Div>
            <textarea
              placeholder="Ingrese el text aqui"
              autoCapitalize="none"
              required
              onChange={handleChange}
            />
          </Div>
          <p>Solo letras minúsculas y sin acentos</p>
          <Div className="btn-container">
            <Button onClick={handleEncrypt} className="btn primary" text="Encriptar" />
            <Button onClick={handleDecrypt} className="btn secondary" text="Desencriptar" />
          </Div>
        </Div>
        <Div>
          <Div className="segundario-container">
            {encryptedText ? (
              <Div className="result-container">
                <p className="result-text">{encryptedText}</p>
                <FaCopy
                  onClick={copyToClipboard}
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                />
              </Div>
            ) : (
              <Div className="empty-state">
                <img src={require("../assets/Muñeco.png")} alt="Muñeco" />
                <h4>Ningun mensaje fue encontrado</h4>
                <p>Ingresa el text que deseas encriptar o desencriptar</p>
              </Div>
            )}
          </Div>
        </Div>
      </Div>
    );
  };
