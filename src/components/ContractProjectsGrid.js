import React from 'react';
import { Box, Flex, Heading, Text, Image, SimpleGrid, Button, useColorModeValue } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import javaLogo from '../assets/java.png';
import springLogo from '../assets/Spring_Framework.png';
import mongoDB from '../assets/mongoDB.png';
import figma from '../assets/figma.png';
import react from '../assets/react.png';
import mySQL from '../assets/mySQL.png'
import aws from '../assets/aws.png'
//In progress!!!!
const contractProjects = [
  {
    year: 2024,
    title: 'Field Service Management System',
    description: "Currently working on a project in Stealth... details coming soon!!!",
    technologies: [figma, react, javaLogo, springLogo, mySQL, mongoDB, aws]
  },
];

function ContractProjectsGrid() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box py={10} px={6} maxWidth="85%" mx="auto">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Contract Projects
      </Heading>
        {contractProjects.map((project, index) => (
          <Box
            key={index}
            bg={cardBg}
            color={textColor}
            p={6}
            borderRadius="md"
            boxShadow={cardShadow}
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Text fontWeight="bold" fontSize="xl">{project.year}</Text>
            </Flex>
            <Heading as="h3" size="md" mb={2}>{project.title}</Heading>
            <Text mb={4}>{project.description}</Text>
            <Flex mt={4} mb={4} justifyContent="flex-start">
              {project.technologies.map((tech, techIndex) => (
                <Image 
                  key={techIndex} 
                  src={tech} 
                  alt={`${tech} Logo`} 
                  boxSize="35px" 
                  mx={1} 
                />
              ))}
            </Flex>
            
          </Box>
        ))}
    </Box>
  );
}

export default ContractProjectsGrid;
