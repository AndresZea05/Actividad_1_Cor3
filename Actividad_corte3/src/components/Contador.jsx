import React from 'react'

const Contador = () => {
    const [contador, setContador]=React.useState(0)
    const mas=()=>{setContador(contador+1)}
    const menos=()=>{setContador(contador-1)}
  return (
    <div>
        <h2>Contador</h2>
        <h3>contador: {contador}</h3>
        <h2>{
            contador%2==0 ? 'Es par' : 'Es impar'
        }</h2>
        <button onClick={mas}>Mas</button>
        <button onClick={menos}>Menos</button>
    </div>
  )
}
export default Contador
