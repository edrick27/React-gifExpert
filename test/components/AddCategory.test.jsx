import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas del componente AddCategory', () => {

    test('debe cambiar el valor de la caja de texto', () => {


        render(<AddCategory onAddNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Ositos' } });

        expect(input.value).toBe('Ositos');
    })
})