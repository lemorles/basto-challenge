import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Form from './components/Form';
import AnimalList from './components/AnimalList';
import { Box, Button, Heading } from '@chakra-ui/react'
import { createAnimalService, getAnimalService, getAnimalsService, deleteAnimalService, updateAnimalService } from './services/animals';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [open, setOpen] = useState(false);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, [])

  const fetchAnimals = async () => {
    const res = await getAnimalsService();
    setAnimals(res);
  }

  const filterAnimals = async (name) => {
    const res = await getAnimalsService(name);
    setAnimals(res)
  }

  const createAnimal = async (input) => {
    const res = await createAnimalService(input);

    if (res?.status === 201) {
      fetchAnimals();
    }
  }

  const editAnimal = async (id, input) => {
    const res = await updateAnimalService(id, input);

    if (res?.status === 200) {
      fetchAnimals();
    }
  }

  const deleteAnimal = async (id) => {
    const res = await deleteAnimalService(id);

    if (res?.status === 200) {
      fetchAnimals();
    }
  }

  const handleClickEdit = async (id) => {
    openModal();
    const animal = await getAnimalService(id);

    if (animal) setAnimal(animal);
  }

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
    setAnimal(null);
  }

  return (
    <>
      <Navbar />
      <Box maxW={'1300px'} margin={'0 auto'}>
        <Heading as={'h1'} mt={10} mb={5}>
          Gestión de ganado
        </Heading>
        <Button colorScheme='green' onClick={openModal} mb={5}>
          Nuevo ganado
        </Button>
        <Search filterAnimals={filterAnimals} />
        {
          open && <Form
            open={open}
            onClose={closeModal}
            animal={animal}
            createAnimal={createAnimal}
            editAnimal={editAnimal}
          />
        }
        <AnimalList
          animals={animals}
          handleEdit={handleClickEdit}
          handleDelete={deleteAnimal}
        />
      </Box>
    </>
  );
}

export default App;
