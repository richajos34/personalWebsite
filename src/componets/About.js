import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="xl">
        I am a software developer with experience in building React applications.
      </Text>
    </Box>
  );
}

export default About;
