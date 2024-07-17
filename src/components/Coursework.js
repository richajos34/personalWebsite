// src/components/Coursework.js

import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, ListIcon, SimpleGrid, useColorModeValue} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';


/**
 * Renders a section displaying a list of coursework.
 * 
 * The `Coursework` component displays a list of courses in a responsive grid layout.
 * Each course is displayed as a list item with a checkmark icon and the course title.
 * The component uses the `useColorModeValue` hook from Chakra UI to adjust the color
 * of the checkmark icon based on the current color mode (light or dark).
 */
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

  const courseColor = useColorModeValue("teal.500", "#7be0e5")

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
                <ListIcon as={CheckCircleIcon} color={courseColor} />
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
