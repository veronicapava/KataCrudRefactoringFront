import React from 'react'

const decorationDone = {
    textDecoration: 'line-through'
};


const ToDo = (todo) => {
    console.log("-***-")
    console.log(todo)

    return (
        <tr key={todo.idToDo} style={todo.completed ? decorationDone : {}}>
            <td>{todo.idToDo}</td>
            <td>{todo.nameToDo}</td>
            <td><input type="checkbox" defaultChecked={todo.completed}></input></td>
            <td><button >Eliminar</button></td>
            <td><button >Editar</button></td>
        </tr>


    )
}

export default ToDo

// futuro componente para editar un todo
{/* <div>
            <form >
                <input
                    type="text"
                    name="name"
                    placeholder="¿Qué piensas hacer hoy?"
                ></input>
                <button>Actualizar</button>
                <button >Crear</button>
            </form>
        </div> */}