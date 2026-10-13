import Buscador from "../molecules/Buscador";
import CardProducto from "../molecules/CardProductos";


function Header(){
    return(
        <header>
            <h1> Mi tienda</h1>

            <nav>
                <a href="#">Inicio</a> |{" "}
                <a href="#">Productos</a> |{" "}
                <a href="#">Contacto</a>
            </nav>
            <br />
            <Buscador/>
            <CardProducto
            id={1}
            titulo="Producto destacado"
            descripcion="descripcion de producto destacado"
            precio={99.10}
            imagen="https://via.placeholder.com/150"
            />


        </header>
    );
}

export default Header;