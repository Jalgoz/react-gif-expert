import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('should', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });
});