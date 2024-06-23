// src/components/Coursework.js

import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, ListIcon, SimpleGrid } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Coursework() {
  const courses = [
    "Structure and Interpretation of Computer Programs",
    "Data Structures and Algorithms",
    "Designing Information Devices and Systems I",
    "Designing Information Devices and Systems II",
    "Machine Structures",
    "Computer Security",
    "Database Systems",
    "Efficient Algorithms and Intractable Problems",
    "Discrete Math and Probability",
    "Blockchain for Developers"
  ];

  return (
    <Box id="coursework" textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={4}>
        Coursework
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} textAlign="center" mx="auto" width="90%" maxWidth="1500px">
        {courses.map((course, index) => (
          <List key={index}>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={CheckCircleIcon} color="teal.500" />
                <Text>{course}</Text>
              </Flex>
            </ListItem>
          </List>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Coursework;
