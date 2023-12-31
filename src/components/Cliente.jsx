import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../api/clientes";

export async function action({params}) {
    if ( confirm('¿Estás seguro de eliminar este cliente?') ) {
        await eliminarCliente( params.clienteId )
    }

    return redirect('/')
}

export const Cliente = ({ cliente }) => {

    // ! Hook para redireccionar
    const navigate = useNavigate()

    // ! Destructuramos el cliente
    const { id, nombre, apellido, email, empresa, telefono } = cliente

    return (
        <tr key={ id } className="[&>td]:border [&>td]:px-4 [&>td]:py-4 [&>td]:space-y-1">
            <td>
                <p className="text-2xl text-gray-800">{ nombre } { apellido }</p>
                <p className="text-sm text-gray-500">{ empresa }</p>
            </td>
            <td>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Email: </span>
                    { email }
                </p>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Tel: </span>
                    { telefono }
                </p>
            </td>
            <td className="text-center">
                <button type="button" onClick={ () => navigate(`/clientes/editar/${ id }`) } className="text-gray-700 hover:text-gray-800 uppercase font-bold text-sm tracking-widest mr-10">Editar</button>
                <Form method="post" action={ `/clientes/${ id }/eliminar` }>
                    <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-sm tracking-widest">Eliminar</button>
                </Form>
            </td>
        </tr>
    )
}