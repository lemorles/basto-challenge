import { Box, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="header" >
      <Box as='nav'
        display={'flex'}
        alignItems='center'
        justifyContent={'space-between'} 
        maxW={'1300px'} 
        margin={'0 auto'}
        height={'70px'}
        >
        <Image src='/assets/logo.png' alt='logo' h={'35px'} />
      </Box>
    </Box>
  )
}