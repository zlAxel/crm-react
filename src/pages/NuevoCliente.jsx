import { useNavigate, Form, useActionData } from "react-router-dom";
import { Error } from "../components/Error";
import { Formulario } from "../components/Formulario";

export async function action({ request }){
    
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
    
    
    if( Object.keys( datos ).length ){
        return errores
    }
    return null
}

export const NuevoCliente = () => {

    const navigate = useNavigate()
    const errores  = useActionData()

    return (
        <>
            <h1 className="font-black text-4xl text-gray-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

            <div className="flex justify-end">
                <button onClick={ () => navigate(-1) } className="bg-gray-800 text-white px-3 py-1 font-bold uppercase">
                    Volver
                </button>
            </div>

            <div className="bg-white shadow-sm rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {/* { errores?.length && errores.map( (error, i) => <Error key={i}>{ error }</Error> )  } */}
                { errores?.length && <Error errores={ errores } /> }
                <Form method="POST" noValidate>
                    <Formulario />
                    <input type="submit" value="Registrar Cliente" className="mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white cursor-pointer" />
                </Form>
            </div>
        </>
    )
}
