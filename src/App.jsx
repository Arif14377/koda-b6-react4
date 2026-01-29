import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App