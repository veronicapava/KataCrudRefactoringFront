import React from 'react'
import ToDo from './ToDo'

const List = ({ list, todos }) => {
    console.log("----------------------------")
    console.log(list)
    console.log(todos)
    return (
        <>
            <div>
                <h1>{list.name}</h1>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>

            <div>
                <table >
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tarea</td>
                            <td>¿Completado?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            todos.map(todo => (
                                <ToDo
                                    key={todo.idToDo}
                                    {...todo}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </>

    )
}

export default List