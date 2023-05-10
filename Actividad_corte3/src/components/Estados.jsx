import React,{useState} from "react"

export const Estados = () => {
    const [texto, setTexto]= useState('Texto inicial desde estado')
    const modificar =()=>{
        setTexto('Texto modificado desde estado')
    }
  return (
    <div>
        <h2>Estado</h2>
        <h3>{texto}</h3>
        <button onClick={modificar}>Modificar</button>
    </div>
  )
}
