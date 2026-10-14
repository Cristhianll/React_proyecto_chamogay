
import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";


function FormularioContacto (){
    const[nombre, setNombre] = useState("");
    const[correo, setCorreo] = useState("");
    const[mensaje, setMensaje] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();//Evita recarga de pagina

        if(nombre.trim() === ""){
            alert("Debe ingresar su nombre");
            return;
        }
        if(correo.trim() === ""){
            alert("Debe ingresar su correo");
            return;
        }
        //comprueba que el correo tenga formato valido
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("ingrese un correo valido hdp!!!!!!");
            return;
        }
        if(mensaje.trim() === ""){
            alert("Debe ingresar un mensaje malparido");
            return;
        }
        alert("gracias por contactanor te llamaremos no nos llames");
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>

            <CampoFormulario
            etiqueta="Nombre completo"
            tipo="text"
            nombre="nombre"
            valor={nombre}
            alCambiar={setNombre}
            
            />

            <CampoFormulario
            etiqueta="Correo electronico"
            tipo="email"
            nombre="correo"
            valor={correo}
            alCambiar={setCorreo}
            />

            <CampoFormulario
            etiqueta="Mensaje"
            tipo="text"
            nombre="mensaje"
            valor={mensaje}
            alCambiar={setMensaje}
            />

            <button type="submit" className="btn btn-primary"> Enviar Mensaje</button>

        </form>
    );
}
export default FormularioContacto;