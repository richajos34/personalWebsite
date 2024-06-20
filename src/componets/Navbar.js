import React from 'react';
import { Flex, Box, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Flex bg="teal.500" color="white" px={4} py={2} alignItems="center">
      <Box fontWeight="bold" fontSize="xl">
        MyWebsite
      </Box>
      <Box ml="auto">
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/projects" mx={2}>
          Projects
        </Link>
        <Link as={RouterLink} to="/contact" mx={2}>
          Contact
        </Link>
        <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline" ml={4}>
          Get in Touch
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
