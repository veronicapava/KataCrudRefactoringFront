import React, { useState } from 'react'

const CreateList = () => {

    const [lista, setLista] = useState("")

    const submit = (e) => {
        const headers = { 'Content-Type': 'application/json' }
        let requestParameters = {
            method: "POST", headers, body: JSON.stringify({
                name: lista
            })
        }

        fetch(`${process.env.REACT_APP_HOST_API}/list`,
            requestParameters
        ).then(() => {
            console.log("Lista creada")
        })
    }

    return (
        <form onSubmit={submit}>
            <h3>Crear nueva lista de tareas:</h3>
            <input type="text" required value={lista} placeholder="Nombre de tu lista"
                onChange={(e) => setLista(e.target.value)} />
            <input type="submit" className="btn btn-primary" value="Guardar" />
        </form>
    )
}

export default CreateList