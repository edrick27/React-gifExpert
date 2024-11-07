import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas de UseFetch', () => {

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Naruto'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    })

    test('debe retornar un resultado valido', async () => {

        const { result } = renderHook(() => useFetchGifs('Naruto'));

        await waitFor(() => {
            return expect(result.current.images.length).toBeGreaterThan(0);
        });

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })

})