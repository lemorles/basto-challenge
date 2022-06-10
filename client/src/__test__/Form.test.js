import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Form open />);
})

describe('Form', () => {
  it('should be render a title `Nuevo ganado`', () => {
    const title = screen.getByRole('heading', { name: /nuevo ganado/i });
    expect(title).toBeInTheDocument();
  });

  it('should be render four inputs (id senasa, peso animal, nombre potrero, nro dispositivo) and two select (tipo de animal, tipo de dispositivo)', () => {
    // inputs
    expect(screen.getByLabelText(/id senasa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/peso animal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre de potrero/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número de dispositivo/i)).toBeInTheDocument();

    // selects
    expect(screen.getByLabelText(/tipo de animal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de dispositivo/i)).toBeInTheDocument();
  });

  it('should be exists a save button', () => {
    const btnSubmit = screen.getByRole('button', { name: /guardar/i });
    expect(btnSubmit).toBeInTheDocument();
  });
})

describe('when user sends the form empty', () => {
  it('should be show the validation messages', () => {
    const btnSubmit = screen.getByRole('button', { name: /guardar/i });
    fireEvent.click(btnSubmit);

    expect(screen.getByText(/el id senasa es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/el tipo de animal es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/el peso es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/el nombre de potrero es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/el tipo de dispositivo es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/el número de dispositivo es requerido/i)).toBeInTheDocument();
  })
});

describe('when the user writes to the input', () => {
  it('should be validate `id senasa` input', () => {
    expect(screen.queryByText(/el id senasa es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/id senasa/i, { target: { name: /senasaId/i, value: '' } });
    fireEvent.change(input, { target: { value: 'SD2' } });

    expect(screen.getByText(/el id senasa debe tener 16 caracteres/i)).toBeInTheDocument();
  });

  it('should be validate `tipo de animal` input', () => {
    expect(screen.queryByText(/el tipo de animal es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/tipo de animal/i, { target: { name: /animalType/i, value: '' } });
    fireEvent.change(input, { target: { value: 'Seleccione una opción' } });

    expect(screen.getByText(/el tipo de animal es requerido/i)).toBeInTheDocument();
  });

  it('should be validate `peso animal` input', () => {
    expect(screen.queryByText(/el peso es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/peso animal/i, { target: { name: /weight/i, value: '' } });
    fireEvent.change(input, { target: { value: '-2' } });

    expect(screen.getByText(/el peso debe ser mayor a 0/i)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '0' } });
    expect(screen.getByText(/el peso debe ser mayor a 0/i)).toBeInTheDocument();
  });

  it('should be validate `nombre de potrero` input', () => {
    expect(screen.queryByText(/el nombre de potrero es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/nombre de potrero/i, { target: { name: /name/i, value: '' } });
    fireEvent.change(input, { target: { value: 'ab' } });

    expect(screen.getByText(/El nombre de potrero debe tener al menos 3 caracteres/i)).toBeInTheDocument();
  });

  it('should be validate `tipo de dispositivo` input', () => {
    expect(screen.queryByText(/el tipo de dispositivo es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/tipo de dispositivo/i, { target: { name: /deviceType/i, value: '' } });
    fireEvent.change(input, { target: { value: 'Seleccione una opción' } });

    expect(screen.getByText(/El tipo de dispositivo es requerido/i)).toBeInTheDocument();
  });

  it('should be validate `número de dispositivo` input', () => {
    expect(screen.queryByText(/el número de dispositivo es requerido/i)).not.toBeInTheDocument();

    const input = screen.getByLabelText(/número de dispositivo/i, { target: { name: /deviceId/i, value: '' } });
    fireEvent.change(input, { target: { value: '1dD42d' } });

    expect(screen.getByText(/el número de dispositivo debe tener 8 caracteres/i)).toBeInTheDocument();
  });
});