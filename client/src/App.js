import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Box, Button, Heading } from '@chakra-ui/react'
import { getAnimalsService } from './services/animals';
import AnimalList from './components/AnimalList';

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, [])

  const fetchAnimals = async () => {
    const res = await getAnimalsService();
    setAnimals(res);
  }

  const deleteAnimal = async () => {
    console.log('delete')
  }

  const handleClickEdit = async () => {
    console.log('open modal')
  }

  return (
    <>
      <Navbar />
      <Box maxW={'1300px'} margin={'0 auto'}>
        <Heading as={'h1'} mt={10} mb={5}>
          Gestión de ganado
        </Heading>
        <Button colorScheme='green' mb={5}>
          Nuevo ganado
        </Button>
        <Heading as={'h2'} size={'lg'} mb={5}>
          Lista de ganado
        </Heading>
        {
          animals && animals.length ? (
            <AnimalList
              animals={animals}
              handleEdit={handleClickEdit}
              handleDelete={deleteAnimal}
            />
          ) : (
            <>No hay ganano cargado</>
          )
        }
      </Box>
    </>
  );
}

export default App;
