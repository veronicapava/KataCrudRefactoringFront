import React from 'react'
import EditToDo from './EditToDo'

const decorationDone = {
    textDecoration: 'line-through'
};


const ToDo = (todo) => {
    console.log("-***-")
    console.log(todo)

    return (<>
        <tr key={todo.idToDo} style={todo.completed ? decorationDone : {}}>
            <td>{todo.idToDo}</td>
            <td>{todo.nameToDo}</td>
            <td><input type="checkbox" defaultChecked={todo.completed}></input></td>
            <td><button >Eliminar</button></td>
            <td><button >Editar</button></td>
            <EditToDo />
        </tr>

    </>

    )
}

export default ToDo
