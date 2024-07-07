import React from 'react';
import { Box, Heading, Text, Image, Flex, Stack, useColorModeValue, VStack } from '@chakra-ui/react';
import UCLogo from '../assets/Berkeley.png'; // Adjust the path if needed
import RHSLogo from '../assets/redlandshs.png'; // Adjust the path if needed

function Education() {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardShadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading mb={6}> Education </Heading>
      <VStack spacing={10} alignItems="center">
        {/* UC Berkeley */}
        <Flex justifyContent="center" alignItems="center" width="100%">
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
              <Image src={UCLogo} alt="UC Berkeley logo" boxSize="100px" />
            </Box>
          </Stack>
          <Box
            className="experience-card"
            backgroundColor={cardBg}
            boxShadow={cardShadow}
            p={6}
            borderRadius="15px"
            width="80%"
            textAlign="left"
            color={textColor}
          >
            <Text fontSize="xl" mt={1}>
              <strong>University of California, Berkeley</strong>
            </Text>
            <Text>
              B.S. Electrical Engineering and Computer Science
            </Text>
            <Text fontSize="md" mb={2}>
              Minors: Data Science
            </Text>
            <Text fontSize="md" mt={2} mb={2}>
              August 2022 - May 2026
            </Text>
          </Box>
        </Flex>
        
        {/* Redlands High School */}
        <Flex justifyContent="center" alignItems="center" width="100%">
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
              <Image src={RHSLogo} alt="Redlands High School logo" boxSize="100px" />
            </Box>
          </Stack>
          <Box
            className="experience-card"
            backgroundColor={cardBg}
            boxShadow={cardShadow}
            p={6}
            borderRadius="15px"
            width="80%"
            textAlign="left"
            color={textColor}
          >
            <Text fontSize="xl" mt={1}>
              <strong>Redlands High School</strong>
            </Text>
            <Text>
              High School Diploma
            </Text>
            <Text fontSize="md" mb={2}>
              Graduated: June 2022
            </Text>
            
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Education;
