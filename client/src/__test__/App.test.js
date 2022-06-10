import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<App />);
})

describe('App', () => {
  it('should be render a title', () => {
    const title = screen.getByRole('heading', { name: /gestión de ganado/i });
    expect(title).toBeInTheDocument();
  });

  it('should be render a `Nuevo Ganado` button', () => {
    const btn = screen.getByRole('button', { name: /nuevo ganado/i });
    expect(btn).toBeInTheDocument();
  });
});

describe('when clicked to `Nuevo Ganado` button', () => {
  it('should be render a title `Nuevo ganado`', () => {
    const btn = screen.getByRole('button', { name: /nuevo ganado/i });
    fireEvent.click(btn);

    const title = screen.getByRole('heading', { name: /nuevo ganado/i });
    expect(title).toBeInTheDocument();
  });

  it('should be render four inputs (id senasa, peso animal, nombre potrero, nro dispositivo) and two select (tipo de animal, tipo de dispositivo)', () => {
    const btn = screen.getByRole('button', { name: /nuevo ganado/i });
    fireEvent.click(btn);

    // inputs
    expect(screen.getByLabelText(/id senasa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/peso animal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre de potrero/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número de dispositivo/i)).toBeInTheDocument();

    // selects
    expect(screen.getByLabelText(/tipo de animal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de dispositivo/i)).toBeInTheDocument();
  })

  it('should be exists a `Guardar` button', () => {
    const btn = screen.getByRole('button', { name: /nuevo ganado/i });
    fireEvent.click(btn);

    const btnSubmit = screen.getByRole('button', { name: /guardar/i });
    expect(btnSubmit).toBeInTheDocument();
  })
})



