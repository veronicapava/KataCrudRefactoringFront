import React from 'react'
import useFetch from '../utils/useFetch'

const EditToDo = () => {

    const cancelar = (e) => {
        e.preventDefault()
        console.log("Modificar estado global de modificar todo, ponerle false")
        console.log("Aca cancelar y no llamar a fetch")
    }

    const editTodo = (e) => {
        e.preventDefault()
        console.log("Modificar estado global de modificar todo, ponerle false")
        console.log("Aca llamar a fetch para actualizar el todo")
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Nombre a cambiar"></input>
                <button onClick={editTodo}>Aceptar</button>
                <button onClick={cancelar}> Cancelar</button>
            </form>
        </div>
    )
}

export default EditToDo