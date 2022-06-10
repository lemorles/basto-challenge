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
  FormErrorMessage,
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
  const [errors, setErrors] = useState({});

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
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validate(input)).length) {
      return setErrors(validate({ ...input, [e.target.name]: e.target.value }));
    }

    if (!animal) {
      createAnimal(input);
    } else {
      editAnimal(animal._id, input);
    }
    onClose();
  }

  return <Modal isOpen={open} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader as={'h2'}>{!animal ? 'Nuevo Ganado' : 'Editar ganado'}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Stack as={'form'}>
          <FormControl isInvalid={errors.senasaId} >
            <FormLabel>ID Senasa</FormLabel>
            <Input type="text" name="senasaId" value={input.senasaId} onChange={handleChange} maxLength="16" />
            <FormErrorMessage>{errors && errors.senasaId}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.animalType} >
            <FormLabel>Tipo de animal</FormLabel>
            <Select name="animalType" placeholder='Seleccione una opción' value={input.animalType} onChange={handleChange} >
              {
                ['Novillo', 'Toro', 'Vaquillona'].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </Select>
            <FormErrorMessage>{errors && errors.animalType}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.weight} >
            <FormLabel>Peso animal</FormLabel>
            <Input type="number" name="weight" value={input.weight} onChange={handleChange} min="0" />
            <FormErrorMessage>{errors && errors.weight}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name} >
            <FormLabel>Nombre de potrero</FormLabel>
            <Input type="text" name="name" value={input.name} onChange={handleChange} maxLength="200" />
            <FormErrorMessage>{errors && errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.deviceType} >
            <FormLabel>Tipo de dispositivo</FormLabel>
            <Select name="deviceType" placeholder='Seleccione una opción' value={input.deviceType} onChange={handleChange} >
              {
                ['collar', 'caravana'].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </Select>
            <FormErrorMessage>{errors && errors.deviceType}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.deviceId} >
            <FormLabel>Número de dispositivo</FormLabel>
            <Input type="text" name="deviceId" value={input.deviceId} onChange={handleChange} maxLength="8" />
            <FormErrorMessage>{errors && errors.deviceId}</FormErrorMessage>
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

const validate = (input) => {
  const errors = {};

  if (!input.senasaId) {
    errors.senasaId = 'El ID Senasa es requerido';
  } else if (input.senasaId.length !== 16) {
    errors.senasaId = 'El ID Senasa debe tener 16 caracteres';
  }

  if (!input.animalType) {
    errors.animalType = 'El tipo de animal es requerido';
  }

  if (!input.weight) {
    errors.weight = 'El peso es requerido';
  } else if (input.weight <= 0) {
    errors.weight = 'El peso debe ser mayor a 0';
  }

  if (!input.name) {
    errors.name = 'El nombre de potrero es requerido';
  } else if (input.name.length < 3) {
    errors.name = 'El nombre de potrero debe tener al menos 3 caracteres';
  }

  if (!input.deviceType) {
    errors.deviceType = 'El tipo de dispositivo es requerido';
  }

  if (!input.deviceId) {
    errors.deviceId = 'El número de dispositivo es requerido';
  } else if (input.deviceId.length !== 8) {
    errors.deviceId = 'El número de dispositivo debe tener 8 caracteres';
  }

  return errors;
}