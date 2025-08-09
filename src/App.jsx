import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/home/Home'
import Layout from './components/layout/layout'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Skills from './pages/skills/Skills'
import Work from './pages/work/Work'

function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "work",
          element: <Work />
        },
        {
          path: "contact",
          element: <Contact />
        },]
    },
  ])
  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App
