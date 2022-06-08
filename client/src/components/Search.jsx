import { Button, FormControl, Input } from "@chakra-ui/react";

export default function Search() {
  return(
    <FormControl display={'flex'} gap={5} mt={5} mb={10} maxW={'50%'}>
      <Input type={'text'} placeholder={'Nombre'} />
      <Button colorScheme={'green'}>Buscar</Button> 
    </FormControl>
  ) 
}