import { NavLink, Outlet } from "react-router-dom";
import { menu } from "../data/layout";

export const Layout = () => {
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-gray-900 px-5 py-10">
                <h2 className="text-3xl text-white font-black text-center">CRM - Clientes</h2>

                <nav className="mt-10 [&>a]:block [&>a]:text-gray-300 [&>a:hover]:bg-gray-700 [&>a]:px-4 [&>a]:py-2 [&>a]:rounded-md [&>a]:transition-colors [&>a]:duration-300">
                    {
                        menu.map( item => (
                            <NavLink key={item.id} className={({isActive}) => isActive ? 'bg-gray-700' : '' } to={ item.ruta }>{ item.nombre }</NavLink>
                        ))
                    }
                </nav>
            </aside>
            <main className="md:w-3/4 md:h-screen p-10 overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}
