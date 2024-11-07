import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas del componente AddCategory', () => {

    test('debe cambiar el valor de la caja de texto', () => {


        render(<AddCategory onAddNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Ositos' } });

        expect(input.value).toBe('Ositos');
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Ositos';
        const onAddNewCategory = jest.fn();

        render(<AddCategory onAddNewCategory={ onAddNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onAddNewCategory).toHaveBeenCalled();
        expect(onAddNewCategory).toHaveBeenCalledTimes(1);
        expect(onAddNewCategory).toHaveBeenCalledWith(inputValue);
     })
})