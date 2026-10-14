import { MemoryRouter } from "react-router-dom";
import {test, expect} from "vitest";
import {render, screen} from "@testing-library/react"
import Boton from "../components/atoms/Boton";


test("el boton muestra el texto Ver producto", () =>{
    
    render(
        <MemoryRouter>
            <Boton id={3} />
        </MemoryRouter>
    );

    const boton = screen.getByText("ver producto");

    expect(boton.textContent).toBe("ver producto");
});