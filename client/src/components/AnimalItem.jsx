import { Box, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export default function AnimalItem({ animal, handleEdit, handleDelete }) {
  return (
    <Tr>
      <Td>{animal.senasaId}</Td>
      <Td>{animal.animalType}</Td>
      <Td>{animal.weight}</Td>
      <Td>{animal.name}</Td>
      <Td>{animal.deviceType}</Td>
      <Td>{animal.deviceId}</Td>
      <Td>
        <Box display={'flex'} justifyContent={'center'} gap={"10px"}>
          <EditIcon cursor={'pointer'} color={'green.500'} onClick={() => handleEdit(animal._id)} />
          <DeleteIcon cursor={'pointer'} color={'red.500'} onClick={() => handleDelete(animal._id)} />
        </Box>
      </Td>
    </Tr>
  )
}