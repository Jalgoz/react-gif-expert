/* eslint-disable testing-library/no-debugging-utils */
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    // Traemos el input
    const input = screen.getByRole('textbox');
    // Disparamos el evento y que su valor sea saitama
    fireEvent.input(input, {
      target: { value: 'Saitama' },
    });
    // Imprime el html
    // screen.debug();
    expect(input.value).toBe('Saitama');
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    // Es una función un Mock
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    // Para que lo pueda encontrar es necesario agregar el aria-label="form" en el form
    const form = screen.getByRole('form');

    fireEvent.input(input, {
      target: { value: inputValue },
    });
    // Disparamos el submit, se ejecutará la función del onSubmit
    fireEvent.submit(form);
    // screen.debug();

    // Evaluamos que sea vació el input value
    expect(input.value).toBe('');
    // Preguntamos si la función fue llamada
    // expect(onNewCategory).toHaveBeenCalled();
    // Preguntamos si la función fue llamada solo una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Evaluamos que se mande a llamar con el valor esperado en este caso que sea "Saitama"
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar le onCategory si el input esta vació', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: '' } });
    fireEvent.submit(form);

    // No debe ser llamada ni una vez ya que se mando a un valor vació
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
