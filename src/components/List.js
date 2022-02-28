import React from 'react'
import ToDo from './ToDo'
import CreateToDo from './CreateToDo'

const List = ({ list, todos }) => {
    return (
        <div className="card card-body border-primary mb-3 mt-2">
            <div >
                <h1>{list.name}</h1>
                <button>Eliminar Lista</button>
                <CreateToDo
                    {...list}
                />
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
        </div >

    )
}

export default List