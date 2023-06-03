import { createBrowserRouter } from 'react-router-dom'
import { Login } from '@app/Auth/LoginHome'
import { Home } from '@app/Dashboard/Home'
import { HomeClients } from '@app/Clients/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Dashboard',
    element: <Home />
  },
  {
    path: '/Clients',
    element: <HomeClients />
  }
])
