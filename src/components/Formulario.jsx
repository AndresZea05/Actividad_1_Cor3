import React from 'react'
import './style.css';
const Formulario = () => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState(0)

    const registrarDatos = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert('Ingrese nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese apellido')
            return
        }
        if (modoEdicion) {
            const nuevaLista = lista.map((elemento) =>
                elemento.id === id ? { id: id, nombre: nombre, apellido: apellido } : elemento
            )
            setLista(nuevaLista)
            setModoEdicion(false)
            setId(0)
        } else {
            const nuevoUsuario = {
                id: new Date().getTime(),
                nombre: nombre,
                apellido: apellido,
            }
            setLista([...lista, nuevoUsuario])
        }
        setNombre('')
        setApellido('')
    }

    const eliminarUsuario = (id) => {
        const nuevaLista = lista.filter((elemento) => elemento.id !== id)
        setLista(nuevaLista)
    }

    const editarUsuario = (elemento) => {
        setModoEdicion(true)
        setNombre(elemento.nombre)
        setApellido(elemento.apellido)
        setId(elemento.id)
    }

    return (
        <div className="container">
            <h2>Formulario</h2>
            <form onSubmit={registrarDatos}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="form-control mb-3"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
                <input
                    type="text"
                    placeholder="Ingrese su Apellido"
                    className="form-control mb-3"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                />
                <div className="d-grip gap-2">
                    {modoEdicion ? (
                        <button className="btn btn-info" type="submit">
                            Editar
                        </button>
                    ) : (
                        <button className="btn btn-primary" type="submit">
                            Registrar
                        </button>
                    )}
                </div>
            </form>
            <hr />
            <h2>Listado de usuarios</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((elemento, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.apellido}</td>
                            <td>
                                <button
                                    className="btn btn-info me-2"
                                    onClick={() => editarUsuario(elemento)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarUsuario(elemento.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Formulario;
