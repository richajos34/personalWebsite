// src/components/DarkModeToggle.js

import React from 'react';
import { useColorMode, Flex, Text, Switch } from '@chakra-ui/react';

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" justify="center" ml={4}>
      <Text mr={2}>{colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}</Text>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="teal"
        size="lg"
      />
    </Flex>
  );
}

export default DarkModeToggle;
