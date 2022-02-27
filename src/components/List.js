import React from 'react'
import ToDo from './ToDo'

const List = (props) => {
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
            <ToDo></ToDo>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>

        </>

    )
}

export default List