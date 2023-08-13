import { obtenerCliente } from "../api/clientes";

export async function loader( { params } ){
    const clienteId = params.clienteId

    // ? Obtener el cliente
    const cliente = await obtenerCliente( clienteId ) 

    // ? Validamos que el cliente exista
    if( Object.values( cliente ).length === 0 ){
        throw new Response('', {
            status: 404,
            statusText: 'El cliente especificado no existe'
        })
    }

    return cliente
}

export const EditarCliente = () => {
    return (
        <div>EditarCliente</div>
    )
}
