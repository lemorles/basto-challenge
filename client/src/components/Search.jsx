import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
      <Box display={'flex'} alignItems={'flex-end'} gap={5} >
        <FormLabel mb={0}>Buscar por nombre:
          <Input
            type={'text'}
            placeholder={'Buscar por nombre'}
            name='search'
            value={search}
            onChange={handleChange}
            mt={2}
          />
        </FormLabel>
        <Button colorScheme={'green'} type={'submit'} >Buscar</Button>
      </Box>
    </FormControl>
  )
}