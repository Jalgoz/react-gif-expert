import {
  renderHook,
  waitFor,
} from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    // Para probar hooks personalizados
    const { result } = renderHook(() =>
      useFetchGifs('One Punch'),
    );

    // En el result.current están las images y el isLoading
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imágenes y el isLoading en false', async () => {
    // Para probar hooks personalizados
    const { result } = renderHook(() =>
      useFetchGifs('One Punch'),
    );

    // Para evaluar los await
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(
        0,
      ),
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
