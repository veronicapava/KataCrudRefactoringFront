import React from 'react'
import useFetch from '../utils/useFetch'
import List from './List'

const ListadoDeListas = ({ peticion }) => {
    console.log(peticion)
    const listas = useFetch(peticion)

    console.log(listas)
    if (!listas) {
        return <span>No hay listas</span>
    }
    return (
        <div>
            <h1>Listas</h1>
            {
                listas.map(li => (
                    <List
                        key={li.id}
                        {...li}
                    />
                ))
            }
        </div>
    )
}

export default ListadoDeListas