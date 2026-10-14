import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";

function FormularioLogin() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita recarga de página

        if (correo.trim() === "") {
            alert("Debe ingresar su correo");
            return;
        }
        // Comprueba que el correo tenga formato válido
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }
        if (contrasena === "") {
            alert("Debe ingresar su contraseña");
            return;
        }
        if (contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        alert("Datos ingresados correctamente");
    };

    return (
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
                etiqueta="Correo"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />

            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contrasena"
                valor={contrasena}
                alCambiar={setContrasena}
            />

            <button type="submit" className="btn btn-primary">
                Iniciar sesión
            </button>
        </form>
    );
}

export default FormularioLogin;