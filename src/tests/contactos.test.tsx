//@vitest-environment jsdom

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Contactos from "../pages/Contactos";

test("El componente Contactos tiene una estructura responsive", () => {
    render(<Contactos />);

    // Comprobamos que la columna se adapte a distintos breakpoints
    const boton = screen.getByRole("button", {
        name: "Enviar Mensaje"
    });

    const columna = boton.closest(".col-12.col-md-6");

    expect(columna).toBeInTheDocument();
});