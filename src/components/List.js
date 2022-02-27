import React from 'react'
import ToDo from './ToDo'
import CreateToDo from './CreateToDo'
const List = ({ list, todos }) => {
    console.log("------------------------------")
    console.log(list)
    console.log(todos)
    return (
        <>
            <div>
                <h1>{list.name}</h1>
                <button>Editar Lista</button>
                <button>Eliminar Lista</button>
                <CreateToDo />
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