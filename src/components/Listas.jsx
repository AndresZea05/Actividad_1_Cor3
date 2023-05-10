import React from 'react'

const Listas = () => {
    const array=['Accion', 'Humor', 'Drama', 'Terror']
    const objetos=[
        {id:1,nombre:'Juana',apellido:'Perez'},
        {id:2,nombre:'Diana',apellido:'Hernandez'}
    ]
    const [Lista, setLista]=React.useState(array)
    const [listaObj,setListaObj]=React.useState(objetos)
    const agregar=()=>{
        setListaObj([
            ...listaObj,
            {id:5,nombre:'Pedro',apellido:'Torres'}
        ])
    }
  return (
    <div>
        <h2>Listas</h2>
        <ol>
            {
                Lista.map((elemento,index)=>(<li key={index}>{elemento}</li>))
            }
        </ol>
        <ul>
            {
                listaObj.map((elemento)=>(<li key={elemento.id}>{elemento.nombre} - {elemento.apellido}</li>))
            }
        </ul>
    </div>
  )
}

export default Listas
