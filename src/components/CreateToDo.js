import React, { useState } from 'react'

const CreateToDo = (lista) => {

    const [nameTodo, setToDo] = useState("")

    const submit = (e) => {
        const headers = { 'Content-Type': 'application/json' }
        console.log(nameTodo)
        const bodyValue = {
            name: nameTodo,
            completed: false,
            list: lista
        }
        let requestParameters = { method: "POST", headers, body: JSON.stringify(bodyValue) }
        console.log(requestParameters)

        fetch(`${process.env.REACT_APP_HOST_API}/todo`,
            requestParameters
        ).then(() => {
            console.log("ToDo creado")
        })
    }

    return (<>
        <form onSubmit={submit}>
            <input type="text" required value={nameTodo} placeholder="Actividad a realizar"
                onChange={(e) => setToDo(e.target.value)} />
            <input type="submit" value="Añadir" />
        </form>
    </>
    )
}

export default CreateToDo