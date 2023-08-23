import { obtenerCliente, actualizarCliente } from "../api/clientes";
import { Error } from "./Error";
import { Formulario } from "./Formulario";
import { useNavigate, Form, useActionData, redirect, useLoaderData } from "react-router-dom";

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

export async function action({ request, params }){
    const formData = await request.formData()
    const datos    = Object.fromEntries( formData )
    const errores  = []

    // ? Validar el email

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if( ! regex.test( datos.email ) ){
        errores.push('El email no es válido')
    }

    // ? Validar los datos
    if( Object.values( datos ).includes('') ){
        errores.push('Todos los campos son obligatorios')
    }

    if( Object.keys( errores ).length ){
        return errores
    }

    // * Actualizar el cliente
    await actualizarCliente( params.clienteId, datos )

    return redirect('/')
}

export const EditarCliente = () => {

    const navigate = useNavigate()
    const errores  = useActionData()
    const cliente  = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl text-gray-900">Editar cliente</h1>
            <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>

            <div className="flex justify-end">
                <button onClick={ () => navigate(-1) } className="bg-gray-800 text-white px-3 py-1 font-bold uppercase">
                    Volver
                </button>
            </div>

            <div className="bg-white shadow-sm rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {/* { errores?.length && errores.map( (error, i) => <Error key={i}>{ error }</Error> )  } */}
                { errores?.length && <Error errores={ errores } /> }
                <Form method="POST" noValidate>
                    <Formulario cliente={ cliente } />
                    <input type="submit" value="Editar Cliente" className="mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white cursor-pointer" />
                </Form>
            </div>
        </>
    )
}
