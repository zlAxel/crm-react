
// ! -----------------------------------------------
// ! Funcion para obtener los clientes de la API

export async function obtenerClientes() {
    const url = import.meta.env.VITE_API_URL
    
    const respuesta = await fetch( url )
    const resultado = await respuesta.json()

    return resultado
}

// ! -----------------------------------------------
// ! Funcion para crear un nuevo cliente

export async function crearCliente( cliente ) {
    try {
        const url = import.meta.env.VITE_API_URL
        
        const respuesta = await fetch( url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log( error );
    }

    return null
}

// ! -----------------------------------------------
// ! Funcion para obtener un cliente por su ID

export async function obtenerCliente( id ) {
    const url = `${ import.meta.env.VITE_API_URL }/${ id }`

    const respuesta = await fetch( url )
    const resultado = await respuesta.json()

    return resultado
}
