import { Table, Tbody } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import AnimalItem from '../components/AnimalItem';

describe('AnimalItem', () => {
  it('should be render a animal', () => {
    const mockAnimal = {
      _id: "62a1145f8570bd1d1ed688ac",
      senasaId: "Ya343342asdA32dX",
      animalType: "Novillo",
      deviceId: "6677vbvV",
      deviceType: "caravana",
      name: "vat",
      weight: 512,
    };

    render(<Table>
      <Tbody>
        <AnimalItem animal={mockAnimal} />
      </Tbody>
    </Table>);

    const senasaId = screen.getByText(/Ya343342asdA32dX/i)
    expect(senasaId).toBeInTheDocument();
  })
})