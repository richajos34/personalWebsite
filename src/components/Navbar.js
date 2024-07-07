import React from 'react';
import { Flex, Box, Link, Button, useColorModeValue } from '@chakra-ui/react';
import DarkModeToggle from './DarkModeToggle';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Navbar() {
  const bg = useColorModeValue('#009688', 'gray.800');
  const color = useColorModeValue('white', 'whiteAlpha.900');

  return (
    <Flex bg={bg} color={color} px={4} py={2} alignItems="center" position="fixed" width="100%" top="0" zIndex="1000">
      <Box fontWeight="bold" fontSize="xl">
        Richa Jos
      </Box>
      <Box ml="auto">
        <Link href="#home" mx={2}>
          About
        </Link>
        <Link href="#projects" mx={2}>
          Projects
        </Link>
        <Link href="#experience" mx={2}>
          Experience
        </Link>
        <Link href="#education" mx={2}>
          Education
        </Link>
        <Button rightIcon={<FaExternalLinkAlt />} as="a" href='https://github.com/richajos34/personalWebsite' colorScheme="teal" variant="outline" ml={4}>
          Site Source Code
        </Button>
        <DarkModeToggle />
      </Box>
    </Flex>
  );
}

export default Navbar;
