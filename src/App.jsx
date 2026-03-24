import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login';
import {ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { getTheme } from './theme'

function App() {
  const mode = localStorage.getItem("theme") || "light"
  const theme = useMemo(() => getTheme(mode),[mode])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={<Login/>}/>
        <Route path='/' element={<MainLayout/>}>
          <Route index path="home" element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
