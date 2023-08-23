import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/css/index.css'

import { Layout } from './components/Layout';
import { NuevoCliente, action as actionNuevoCliente } from './pages/NuevoCliente';
import { Index, loader as loaderClientes } from './pages/Index';
import { ErrorPage } from './components/ErrorPage';
import { EditarCliente, loader as loaderEditarCliente, action as actionEditarCliente } from './components/EditarCliente';
import { action as actionEliminarCliente } from './components/Cliente';

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
				loader: loaderClientes,
				errorElement: <ErrorPage />
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
				action: actionNuevoCliente,
				errorElement: <ErrorPage />
			},
			{
				path: '/clientes/editar/:clienteId',
				element: <EditarCliente />,
				loader: loaderEditarCliente,
				action: actionEditarCliente,
				errorElement: <ErrorPage />
			},
			{
				path: '/clientes/:clienteId/eliminar',
				action: actionEliminarCliente,
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
