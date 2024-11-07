import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";



describe('Pruebas GifExpertAPP', () => {

    test('debe mostrar el componente correctamente', () => {


        render(<GifExpertApp />);
        screen.debug();

        expect(true).toBe(true);
    })

})