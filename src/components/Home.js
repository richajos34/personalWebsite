import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import ContactForm from './ContactForm'; // Import the ContactForm component
import Extracurriculars from './Extracurriculars'; // Import the Extracurriculars component
import profileImage from '../assets/profilePhoto.png'; // Replace with your image path

function Home() {
  return (
    <Box
      id="about"
      bg="gray.800"
      color="white"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={10}
    >
      <Flex direction={{ base: 'column', md: 'row' }} align="center" w="full" maxW="1200px">
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image src={profileImage} alt="Profile Image" borderRadius="md" boxShadow="lg" maxW="100%" />
        </Box>
        <Box flex="1" p={6} bg="white" borderRadius="md" color="black" boxShadow="lg" ml="auto">
          <ContactForm />
        </Box>
      </Flex>
      <Extracurriculars />
    </Box>
  );
}

export default Home;
