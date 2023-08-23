// ! importamos los hooks
import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components/Cliente";
import { obtenerClientes } from "../api/clientes";

// ! Declaramos el loader
export function loader(){
    const clientes = obtenerClientes()
    
    return clientes
}

// ! Declaramos el componente
export const Index = () => {

    // ! Obtenemos los datos del loader (clientes)
    const clientes = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl text-gray-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            { clientes.length ? (
                <table className="table-auto shadow mt-10 w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr className="[&>th]:w-1/5 [&>th]:py-2">
                            <th>Cliente</th>
                            <th>Contacto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        { 
                            clientes.map( cliente => (
                                <Cliente key={ cliente.id } cliente={ cliente } />
                            ))
                        }
                    </tbody>
                </table>
            ) : (
                <p className="mt-10 text-center">No hay clientes</p>
            ) }
        </>
    )
}
