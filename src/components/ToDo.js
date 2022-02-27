import React from 'react'

const ToDo = () => {
    return (
        <div>
            <form >
                <input
                    type="text"
                    name="name"
                    placeholder="¿Qué piensas hacer hoy?"
                ></input>
                <button>Actualizar</button>
                <button >Crear</button>
            </form>
        </div>
    )
}

export default ToDo