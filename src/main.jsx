import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React i
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Component
import About from "./components/About";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
import Hobi from "./components/Hobi";
import Galeri from "./components/galeri/Galeri.jsx";
import dataSlide from "./data/dataSlide";
import MyProfile from './components/children/MyProfile';
import Home2 from './components/children/Home2.jsx'

const router = createBrowserRouter([
  {
    path  : '/',
    element:  <App />,
    errorElement: 'error',
    children: [
      {
        path: '/',
        element : (
          <>
            <Baner type='awal' />
            <Home />
            <About />
            <Hobi />
            <Galeri />
            <Slide data={dataSlide} />
            <Footer />
          </>
        )
      },
      {
        path: '/lanjut',
        element: (
          <>
            <Baner type='asdf' />
            <Home2 />
            <MyProfile />
          </>
        )
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
