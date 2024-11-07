import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Prueba del GifItem', () => {

    const title = "hola Mundo";
    const url = "https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=a2ccfd36agv0f80hafuikwpxbss1yllzprvgemxszpif1mrs&ep=v1_gifs_search&rid=giphy.gif&ct=g"

    test('Snapshot del GifItem', () => {

        const { container } = render(<GifItem title={ title } url={ url } />);

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el title y el url en el lugar indicado', () => {

        render(<GifItem title={ title } url={ url } />);

        const img = screen.getByRole('img').src;
        expect(img).toBe(url);
    })

    test('El titulo debe estar en el lugar indicado', () => {

        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})