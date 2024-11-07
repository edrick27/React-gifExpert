import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del GifGrid', () => {

    test('dede mostrar el loadind inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category='juan caballo' />)
        const loading = screen.getByText('Cargando...') ;
        expect(loading).toBeTruthy();
    })

    test('debe de mostrar items cuando se cargan las imagenes', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category='juan caballo' />)

        const imgHtml = screen.getAllByRole('img');
        expect(imgHtml.length).toBe(1);
    })
})