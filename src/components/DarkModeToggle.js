// src/components/DarkModeToggle.js

import React from 'react';
import { useColorMode, Button, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
      isRound
    />
  );
}

export default DarkModeToggle;
