import React from 'react'
import { useState } from 'react'

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
        <h1>Calculadora de IMC</h1>
      </div>
      <div className='typeContainer'>
        <p>Peso</p>
        <input type="number" placeholder='peso(Kg)' value={peso} onChange={(e) => setPeso(e.target.value)} required/>
        <p>Altura</p>
        <input type="number" placeholder='altura(m)' value={altura} onChange={(e) => setAltura(e.target.value)} required />
      </div>
      <button className='btn' onClick={handleSubmit}>calcular</button>
      <h2>Seu IMC é: {resultado}</h2>
    </div>
  )
}

export default Imc