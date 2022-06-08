import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'

import AnimalItem from "./AnimalItem";

export default function AnimalList({ animals, handleEdit, handleDelete }) {
  return (
    <TableContainer>
      <Table variant='simple' colorScheme={'green'} >
        <Thead>
          <Tr>
            <Th>ID Senasa</Th>
            <Th>Tipo Animal</Th>
            <Th>Peso (kg)</Th>
            <Th>Nombre potrero</Th>
            <Th>Tipo de dispositivo</Th>
            <Th>Número de dispositivo</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            animals?.map((animal) => (
              <AnimalItem 
                key={animal._id} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete}
                {...animal}
              />
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>

  )
}

