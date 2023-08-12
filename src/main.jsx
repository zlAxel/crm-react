import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/css/index.css'

import { Layout } from './components/Layout';
import { NuevoCliente, action as actionNuevoCliente } from './pages/NuevoCliente';
import { Index, loader as loaderClientes } from './pages/Index';

// ! ----------------------------------
// ! Creación de rutas

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: loaderClientes
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
				action: actionNuevoCliente
			}
		]
	}
])

// ! ----------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<RouterProvider router={ router } />
	// </React.StrictMode>,
)
