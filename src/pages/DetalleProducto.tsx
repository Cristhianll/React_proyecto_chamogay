import { useParams } from "react-router-dom"
import BotonVolver from "../components/atoms/BotonVolver"

const productos = [
            {
                id:1,
                titulo:"NoteBook",
                descripcion:"NoteBook ideal para estudiar ",
                precio:10000,
                imagen:"/img/notebook-img.jpg"
                
            },

            {  
                
                id:2,
                titulo:"Mouse",
                descripcion:"ideal para el NoteBook ",
                precio:10000,
                imagen:"/img/mause-img.jpg"
                
            },
                
            {
                id:3,
                titulo:"Teclado",
                descripcion:"ideal para el NoteBook ",
                precio:20000,
                imagen:"/img/teclado-img.jpg"
                
            },
            {
                id:4,
                titulo:"audifono",
                descripcion:"audifono con cancelacion de ruido, y bajos envolventes",
                precio:10000,
                imagen:"img/audifono.jpg"
            }

    ]   
function DetalleProducto(){

    const {id} = useParams()

    const producto = productos.find(
        producto => producto.id === Number(id)
    )
    return(
        <div>
            <h1> Detalle del Producto</h1>
            <img 
            src={producto?.imagen}
            alt={producto?.titulo} 
            style={{width: '300px'}}
            />

            <h2> {producto?.titulo}</h2>
            <p>{producto?.descripcion}</p>
            <p>{producto?.precio}</p>
            <div>
                 <BotonVolver/>
            </div>
           
        </div>
    )
           
}

             


export default DetalleProducto