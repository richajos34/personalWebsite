import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Experience() {
  return (
    <Box id="experience" textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        My Experience
      </Heading>
      <Text fontSize="xl">
        Here is a detailed description of my experience.
      </Text>
    </Box>
  );
}

export default Experience;
