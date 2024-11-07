import { getGifs } from "../../src/helpers/getGifs"

describe('EL getGifs retorna imagenes', () => {

    test('debe retornar 10 imagenes', async () => {

        const gifs = await getGifs({ category: 'One Punch' });

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
})