// src/components/Education.js

import React from 'react';
import { Box, Heading, Text, Image, Flex, Stack, Spacer } from '@chakra-ui/react';
import UCLogo from '../assets/Berkeley.png'; // Adjust the path if needed

function Education() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading> Education </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Stack spacing={8} mr={10}>
          <Box
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease-in-out"
          >
            <Image src={UCLogo} alt="berkeley logo" boxSize="100px" />
          </Box>
        </Stack>
        <Box
          className="experience-card"
          backgroundColor="white"
          boxShadow="lg"
          p={6}
          borderRadius="15px"
          width="80%"
          textAlign="left"
        >
          <Text fontSize="lg" mb={2}>
            <strong>University of Califonia, Berkeley</strong> - B.S. Electrical Engineering and Computer Science
          </Text>
          <Text fontSize="md" mb={2}>
            August 2022 - May 2026
          </Text>
          <Text fontSize="md" mb={2}>
            Extracurriculars: Web Development at Berkeley, Computer Science Kickstart
          </Text>
          <Spacer />
          </Box>
      </Flex>
    </Box>
  );
}

export default Education;
