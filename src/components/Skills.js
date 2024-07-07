// src/components/Coursework.js

import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, ListIcon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Skills() {
  const courses = [
    "Node.js", 
    "Next.js",
    "Express",
    "Django",
    "Spring",
    "MongoDB",
    "DynamoDB",
    "PostgreSQL",
    "Firebase",
    "Google Cloud",
    "AWS",
    "React", 
    "Angular",
    "HTML/CSS",
    "Docker",
    "Postman",
    "JUnit",
    "Java",
    "Python",
    "JavaScript", 
    "TypeScript", 
    "C", 
    "SQL",  
    "C++", 
    "Flutter"
  ];

  const gradientOverlay = useColorModeValue(
    'linear(to-b, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
    'linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))'
  );

  return (
    <Box
      id="coursework"
      textAlign="center"
      py={10}
      px={6}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: gradientOverlay,
        zIndex: -1,
      }}
    >
      <Heading as="h1" size="xl" mb={10}>
        Skills & Tools
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10} textAlign="center" mx="auto" width="90%" maxWidth="1500px">
        {courses.map((course, index) => (
          <List key={index}>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={CheckCircleIcon} color="teal.500" />
                <Text size="lg">{course}</Text>
              </Flex>
            </ListItem>
          </List>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
