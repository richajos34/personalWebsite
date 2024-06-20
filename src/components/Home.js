import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

function Home() {
  return (
    <Box id="home" textAlign="center" py={10} px={6} mt="60px">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Personal Website
      </Heading>
      <Text fontSize="xl" mb={6}>
        This is the home page.
      </Text>
      <Button colorScheme="teal" size="lg">
        Learn More
      </Button>
    </Box>
  );
}

export default Home;
