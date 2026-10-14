

import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import Navbar from "./components/organisms/Navbar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Footer from "./components/organisms/Footer";
import Contactos from "./pages/Contactos";
import DetalleProducto from "./pages/DetalleProducto";
import Login from "./pages/Login";




function App(){
  return(
    <>
      <Navbar/>

      <Routes>

        <Route 
        path="/"
        element={<Inicio/>}

        />
        <Route
        path="/productos"
        element={<Productos/>}
        />

        <Route
        path="/contactos"
        element={<Contactos/>}
        />
        
        <Route
        path="/producto/:id"
        element = {<DetalleProducto/>}
        />

        <Route 
        path="/login" 
        element={<Login/>} 
        />

      </Routes>

      <Footer/>

    </>
  )
  
}



export default App;