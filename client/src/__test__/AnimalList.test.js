import { render, screen } from "@testing-library/react";
import AnimalList from "../components/AnimalList";

describe('AnimalList', () => {
  it('should be render a title `Lista de ganado`', () => {
    const mockAnimals = [];
    render(<AnimalList animals={mockAnimals} />);

    const title = screen.getByRole('heading', { name: /lista de ganado/i });
    expect(title).toBeInTheDocument();
  })

  it('should be render a text `No hay animales cargados` when the list of animals is empty', () => {
    const mockAnimals = [];

    render(<AnimalList animals={mockAnimals} />);
    expect(screen.getByText(/no hay animales cargados/i)).toBeInTheDocument();
  })

  it('should be render a list of animals', () => {
    const mockAnimals = [{
      animalType: "Novillo",
      deviceId: "6677vbvV",
      deviceType: "caravana",
      name: "vat",
      senasaId: "Ya343342asdA32dX",
      weight: 512,
      _id: "62a1145f8570bd1d1ed688ac",
    }];

    render(<AnimalList animals={mockAnimals} />);
    expect(screen.getByText(/novillo/i)).toBeInTheDocument();
  })
})