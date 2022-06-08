import { Box, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

export default function AnimalItem({ _id,senasaId, animalType, weight, name, deviceType, deviceId, handleEdit, handleDelete }) {
  return (
    <Tr>
      <Td>{senasaId}</Td>
      <Td>{animalType}</Td>
      <Td>{weight}</Td>
      <Td>{name}</Td>
      <Td>{deviceType}</Td>
      <Td>{deviceId}</Td>
      <Td>
        <Box display={'flex'} justifyContent={'center'} gap={"10px"}>
          <EditIcon cursor={'pointer'} color={'green.500'} onClick={() => handleEdit(_id)} />
          <DeleteIcon cursor={'pointer'} color={'red.500'} onClick={() => handleDelete(_id)} />
        </Box>
      </Td>
    </Tr>
  )
}