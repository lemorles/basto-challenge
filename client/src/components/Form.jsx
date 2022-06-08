import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Select,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalFooter,
  Stack,
} from '@chakra-ui/react';

export default function Form({ open, onClose, animal, createAnimal, editAnimal }) {
  const [input, setInput] = useState({
    senasaId: '',
    animalType: '',
    weight: '',
    name: '',
    deviceType: '',
    deviceId: '',
  });

  useEffect(() => {
    if (animal) {
      setInput({
        senasaId: animal.senasaId,
        animalType: animal.animalType,
        weight: animal.weight,
        name: animal.name,
        deviceType: animal.deviceType,
        deviceId: animal.deviceId,
      })
    }
  }, [animal])

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!animal) {
      createAnimal(input);
    } else {
      editAnimal(animal._id, input);
    }
    onClose();
  }

  return <Modal isOpen={open} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{!animal ? 'Nuevo Ganado' : 'Editar ganado'}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Stack as={'form'}>
          <FormControl>
            <FormLabel>ID Senasa</FormLabel>
            <Input type="text" name="senasaId" value={input.senasaId} onChange={handleChange} maxLength="16" mb={2} />
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de animal</FormLabel>
            <Select name="animalType" placeholder='Seleccione una opción' value={input.animalType} onChange={handleChange} mb={2} >
              {
                ['Novillo', 'Toro', 'Vaquillona'].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Peso animal</FormLabel>
            <Input type="number" name="weight" value={input.weight} onChange={handleChange} min="0" mb={2} />
          </FormControl>

          <FormControl>
            <FormLabel>Nombre de potrero</FormLabel>
            <Input type="text" name="name" value={input.name} onChange={handleChange} maxLength="200" mb={2} />
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de dispositivo</FormLabel>
            <Select name="deviceType" placeholder='Seleccione una opción' value={input.deviceType} onChange={handleChange} mb={2} >
              {
                ['collar', 'caravana'].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Número de dispositivo</FormLabel>
            <Input type="text" name="deviceId" value={input.deviceId} onChange={handleChange} maxLength="8" mb={2} />
          </FormControl>
        </Stack >
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          colorScheme={'green'}
          w={'100%'}
          mb={3}
          onClick={handleSubmit}
        >Guardar
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}