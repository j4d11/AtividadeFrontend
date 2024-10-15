import React, { useState } from 'react';
import './Imc.css';

const Imc = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [genero, setGenero] = useState('masculino');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2));
      classificarIMC(imc);
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  const classificarIMC = (imc) => {
    let classificacao;

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 40) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3 (mórbida)';
    }

    if (genero === 'feminino') {
      classificacao += ' para mulheres';
    } else {
      classificacao += ' para homens';
    }

    setClassificacao(classificacao);
  };

  return (
    <div className="Container">
      <div>
        <h1>Calculadora de IMC 💪</h1>
      </div>

      <div className="inputContainer">
        <div className="inputGroup">
          <label className="label">Peso</label>
          <input
            className="inputField"
            type="number"
            placeholder="peso(Kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Altura</label>
          <input
            className="inputField"
            type="number"
            placeholder="altura(m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label">Gênero</label>
          <select
            className="inputField"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
      </div>

      <div className="btnContainer">
        <button className="btn" onClick={handleSubmit}>Calcular</button>
      </div>

      <div className="resultado">
        <h2>Seu IMC é: {resultado}</h2>
        {classificacao && <p>{classificacao}</p>}
      </div>
    </div>
  );
};

export default Imc;
