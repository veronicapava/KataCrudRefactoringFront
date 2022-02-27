import React from 'react'

const CreateList = () => {
    return (
        <div>
            <h3>Crear nueva lista de tareas:</h3>
            <input type="text" placeholder="Nombre de tu lista" /><br></br>
            <button type="button">Guardar</button>
        </div>
    )
}

export default CreateList