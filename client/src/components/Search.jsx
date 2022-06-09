import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Search({ filterAnimals }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    filterAnimals(search);
  }

  return (
    <FormControl as={'form'} onSubmit={handleSubmit} mt={5} mb={10} width={'40%'}>
      <Box display={'flex'} alignItems={'center'} gap={5} >
        <Input type={'text'} placeholder={'Nombre'} name='search' value={search} onChange={handleChange} />
        <Button colorScheme={'green'} type={'submit'} >Buscar</Button>
      </Box>
    </FormControl>
  )
}