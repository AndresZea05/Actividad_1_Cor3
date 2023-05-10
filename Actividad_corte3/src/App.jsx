import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compclase from './components/Compclase'
import Compfuncion from './components/Compfuncion'
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'
import Eventos from './components/Eventos'
import { Estados } from './components/Estados'
import Contador from './components/Contador'
import Listas from './components/Listas'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)
  const style="active"
  const contenido="Desarrollo web I"
  return (
    <>
      
      <Formulario></Formulario>
    </>
    
  )
}

export default App
