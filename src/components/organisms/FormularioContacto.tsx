
import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";

import type { SubmitEvent } from "react";


function FormularioContacto (){
    const[nombre, setNombre] = useState("");
    const[correo, setCorreo] = useState("");
    const[mensaje, setMensaje] = useState("");
    //permite indicar el mensaje se esta enviando
    const[enviando, setEnviando] = useState (false);

    const manejarEnvio = async (e:SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();//Evita recarga de pagina

        if(enviando) return;

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
        setEnviando(true);

        try {
            //envia los datos del formulario a spring boot
            const respuesta = await fetch(
                "http://localhost:8082/api/contactos",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        nombreCompleto: nombre.trim(),
                        correo: correo.trim(),
                        mensaje: mensaje.trim(),
                    }),
                }
            );
            
            if (!respuesta.ok){
                throw new Error(`Error HTTP ${respuesta.status}`);
            }

            alert("MENSAJE GUARDADO CORRECTAMENTE")
            //limpiamos los campos solo si se guardo correctamente
            setNombre("");
            setCorreo("");
            setMensaje("");
        }catch(error){
            console.error("Error al enviar el contacto:",error);
            alert("no se pudo enviar el mensaje. intentelo de nuevo");
        }finally{
            setEnviando(false);
        }
    };


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

            <button type="submit" className="btn btn-primary" disabled={enviando}> {enviando ? "Enviando...": "Enviar mensaje"}</button>

        </form>
    );
}
export default FormularioContacto;