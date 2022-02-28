import React from 'react'
import useFetch from '../utils/useFetch'
import List from './List'


const ListadoDeListas = () => {

    const todos = useFetch("/todos")
    const listas = useFetch("/list")

    if (!listas) {
        return <span>No hay listas</span>
    }

    const listWithTodos = listas.map(list => {
        const todosInList = todos.filter(todo => todo.idList === list.id)
        return { list, todos: todosInList }
    })

    return (
        <div>
            <h1>Listas</h1>
            {
                listWithTodos.map(info => (
                    <List
                        key={info.list.id}
                        list={info.list}
                        todos={info.todos}
                    />
                ))
            }
        </div>
    )
}

export default ListadoDeListas