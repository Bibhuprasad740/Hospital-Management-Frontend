import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/home/Home'
import './App.css'
import PatientDetails from './components/home/main-content/patient-details/PatientDetails'
import DefaultPage from './components/home/main-content/patient-details/DefaultPage'
import { protection } from './utils/util'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        index: true,
        element: <DefaultPage />
      },
      {
        path: ":patientId",
        element: <PatientDetails />,
        loader: protection
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
