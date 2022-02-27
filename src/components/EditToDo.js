import React from 'react'
import useFetch from '../utils/useFetch'

const EditToDo = () => {

    const edit = useFetch("/todo/{id}")

    return (
        <div>
            {

            }
            <form>
                <input type="text" placeholder="Nombre a cambiar"></input>
                <button>Editar ToDo</button>
            </form>
        </div>
    )
}

export default EditToDo