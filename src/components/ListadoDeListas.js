import React from 'react'
import useFetch from '../utils/useFetch'
import List from './List'
import ToDo from './ToDo'

const ListadoDeListas = () => {

    const todos = useFetch("/todos")
    const listas = useFetch("/list")

    console.log(todos);
    console.log(listas);

    if (!listas) {
        return <span>No hay listas</span>
    }

    const todoByLista = listas.map(list => todos.filter(todo => todo.idList == list.id))

    return (
        <div>
            <h1>Listas</h1>
            {
                todos.map(todo => (
                    <ToDo
                        key={todo.idToDo}
                        {...todo}
                    />
                ))
            }
        </div>
    )
}

export default ListadoDeListas