import React from 'react'
import { useState } from 'react'
import './Imc.css'


const Imc = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const imc = (peso / (altura * altura))
    setResultado(imc.toFixed(2))
  }

  return (
    <div className='Container'>
      <div>
        <h1>Calculadora de IMC 💪 </h1>
      </div>
      <div className='inputContainer'>
        <div className='inputGroup'>
          <label className='label'>Peso</label>
          <input className='inputField' type="number" placeholder='peso(Kg)' value={peso} onChange={(e) => setPeso(e.target.value)} required />
        </div>
        <div className='inputGroup'>
          <label className='label'>Altura</label>
          <input className='inputField' type="number" placeholder='altura(m)' value={altura} onChange={(e) => setAltura(e.target.value)} required />
        </div>
      </div>
      <div className='btnContainer'>
        <button className='btn' onClick={handleSubmit}>calcular</button>
      </div>
      <div className='resultado'>
        <h2>Seu IMC é: {resultado}</h2>
      </div>
    </div>
)

  }

export default Imc