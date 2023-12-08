import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React i
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom';

// Component
import About from "./components/About";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
import Hobi from "./components/Hobi";
import Galeri from "./components/Galeri";
import dataSlide from "./data/dataSlide";
import CodeQR from './components/children/CodeQR.jsx';
import ButtonModal from './context/ButtonModal.jsx'


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
            <Baner>
              <ButtonModal />
            </Baner>
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
            <Baner />
            <CodeQR />
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
