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
        </>

    )
}

export default List