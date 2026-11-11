import { useEffect, useState } from "react";

//datos que mostraremos de cada contacto
interface Contacto{
    id: number;
    nombreCompleto: string;
    correo: string;
    mensaje: string;
}

function ListadoContactos(){
    const[contactos, setContactos] = useState<Contacto[]>([]);

    //consulta el backend al abrir la pagina
    useEffect(() => {
        fetch("http://localhost:8082/api/contactos").then((respuesta) => {
            if(!respuesta.ok){
                throw new Error("Error al consultar los contactos");
            }
            return respuesta.json();
        })
        .then((datos)=> setContactos(datos)).catch(()=> alert("nose pudo cargar los contactos"));
    },[]);
    return(
        <div className="container mt-5">
            <h2>Contactos Recibidos</h2>
            {/*muestra una tarjeta por cada contacto */}
            {contactos.map((contacto) =>(
                <div className="card p-3 mb-3" key={contacto.id}>
                    <h5>{contacto.nombreCompleto}</h5>
                    <p>{contacto.correo}</p>
                    <p>{contacto.mensaje}</p>
                    </div>
            ))}
            </div>
    );
}

export default ListadoContactos;