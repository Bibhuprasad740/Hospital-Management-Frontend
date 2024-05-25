import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/home/Home'
import './App.css'
import DefaultPage from './components/DefaultPage'
import PatientDetailsPage from './components/home/main-content/patient-details/PatientDetailsPage'

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
        element: <PatientDetailsPage />
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