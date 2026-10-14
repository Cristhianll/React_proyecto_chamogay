//@vitest-enviroment jsdom

import {test, expect, vi} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";

import FormularioContacto from "../components/organisms/FormularioContacto";

test("Muestra una alerta cuando el nombre esta vacio",() =>{

    //simulamos la funcion alert del navegador
    const alerta = vi.spyOn(window,"alert").mockImplementation(() =>{});

    //mostramos el formulario
    render(<FormularioContacto/>);

    //simulamos que el usuario presiona enviar
    fireEvent.click(screen.getByRole("button",{name : "Enviar Mensaje"}));

    //comprobamos el mensaje de validacion
    expect(alerta).toHaveBeenCalledWith("Debe ingresar su nombre");

    //restauramos la funcion alert

    alerta.mockRestore();
})