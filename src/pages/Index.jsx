// ! importamos los hooks
import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components/Cliente";
import { clientes } from "../data/clientes";

// ! Declaramos el loader
export function loader(){
    return clientes
}

// ! Declaramos el componente
export const Index = () => {

    // ! Obtenemos los datos del loader (clientes)
    const data = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl text-gray-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            { data.length ? (
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
                            data.map( cliente => (
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