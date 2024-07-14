// src/components/Navbar.js

import React from 'react';
import { Flex, Box, Link, useColorModeValue } from '@chakra-ui/react';
import DarkModeToggle from './DarkModeToggle';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Navbar() {
  const bg = useColorModeValue('#009688', 'gray.800');
  const color = useColorModeValue('white', 'whiteAlpha.900');

  return (
    <Flex
      bg={bg}
      color={color}
      px={4}
      py={2}
      alignItems="center"
      position="fixed"
      width="100%"
      height="7%"
      top="0"
      zIndex="1000"
    >
      <Box fontWeight="bold" fontSize="xl">
        Richa Jos
      </Box>
      <Flex ml="auto" alignItems="center">
        <DarkModeToggle ml={4}/>
      </Flex>
    </Flex>
  );
}

export default Navbar;
