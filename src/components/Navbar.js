import React from 'react';
import { Flex, Box, Link, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex bg="teal.500" color="white" px={4} py={2} alignItems="center" position="fixed" width="100%" top="0" zIndex="1000">
      <Box fontWeight="bold" fontSize="xl">
        Richa Jos
      </Box>
      <Box ml="auto">
        <Link href="#home" mx={2}>
          Home
        </Link>
        <Link href="#about" mx={2}>
          About
        </Link>
        <Link href="#projects" mx={2}>
          Projects
        </Link>
        <Link href="#experience" mx={2}>
          Experience
        </Link>
        <Button href="#contact" colorScheme="teal" variant="outline" ml={4}>
          Get in Touch
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
