import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function Experience() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Contact Me
      </Heading>
      <Text fontSize="xl" mb={6}>
        Feel free to reach out!
      </Text>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button colorScheme="teal" size="lg">
        Submit
      </Button>
    </Box>
  );
}

export default Experience;
