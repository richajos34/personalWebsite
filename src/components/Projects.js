import React from 'react';
import { Box, Flex, Heading, Text, Image, SimpleGrid, Button, useColorModeValue } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import springLogo from '../assets/Spring_Framework.png';
import javaLogo from '../assets/java.png';
import javaScriptLogo from '../assets/javascript.png';
import mongoDB from '../assets/mongoDB.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import python from '../assets/python.png';
import nodejs from '../assets/nodejs.png';
import reactLogo from '../assets/react.png';
import docker from '../assets/docker.png';
import c from '../assets/C.png'
import flutter from '../assets/flutter.png';
import cPlusPlus from '../assets/C++.png'
import mySQL from '../assets/mySQL.png'

const projects = [
  {
    year: 2024,
    title: 'My Personal Website',
    description: "The source of this website.",
    links: [
      { type: 'Source', url: 'https://github.com/your-repo/safezone' },
    ],
    stars: 3,
    technologies: [html, css, javaScriptLogo, reactLogo]
  },
  {
    year: 2023,
    title: 'SafeZone',
    description: "Interactive map application used for visualizing UC Berkeley's Crime data.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 2,
    technologies: [springLogo, javaLogo, mongoDB, html, css, docker]
  },
  {
    year: 2023,
    title: 'AI Recommendation Engine',
    description: "Book recommendation engine to suggests books to users based on their preferences.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 2,
    technologies: [cPlusPlus, nodejs, mySQL]
  },
  {
    year: 2024,
    title: 'Video Convolution Processor',
    description: "Convolution framework, with enhanced performance through parallel processing.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
    technologies: [c]
  },
  {
    year: 2024,
    title: 'JPMorgan Chase Software Engineering Virtual Experience',
    description: "Financial software solutions through implementing transaction processing algorithms",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
    technologies: [python]
  },
  {
    year: 2024,
    title: 'Cricket Visualizer',
    description: "A simulation of a cricket game with optimal cricket passing algorithms and data structures.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
    technologies: [python]
  },
  {
    year: 2022,
    title: 'Notium',
    description: "A full-stack replica of the popular note-taking website Notion.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
    technologies: [reactLogo, javaScriptLogo, nodejs]
  },
  {
    year: 2022,
    title: 'Contest Calling',
    description: "Backend for contest calling technical",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
    technologies: [nodejs, javaScriptLogo]
  },
  {
    year: 2020,
    title: 'Eudiemonia',
    description: " A mental health mobile application",
    links: [
      { type: 'Article', url: '#' },
    ],
    stars: 6727,
    technologies: [flutter, javaScriptLogo]
  },
  // Add more projects here
];

function ProjectsGrid() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  const iconFilter = useColorModeValue('none', 'grayscale(100%) brightness(150%)');

  return (
    <Box py={10} px={6} maxWidth="85%" mx="auto">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project, index) => (
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
              <Flex alignItems="center">
                <Text mr={2}>{project.stars}</Text>
                <FaStar color="yellow" />
              </Flex>
            </Flex>
            <Heading as="h3" size="md" mb={2}>{project.title}</Heading>
            <Text mb={4}>{project.description}</Text>
            <Flex mt={4} mb={4} justifyContent="flex-start">
              {project.technologies.map((tech, techIndex) => (
                <Image 
                  key={techIndex} 
                  src={tech} 
                  alt={`${tech} Logo`} 
                  boxSize={tech = "35px"} 
                  mx={1} 
                  filter={iconFilter} 
                />
              ))}
            </Flex>
            <Flex justifyContent="space-between">
              {project.links.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  as="a"
                  href={link.url}
                  rightIcon={<FaExternalLinkAlt />}
                  size="sm"
                  colorScheme="teal"
                  variant="outline"
                  mr={2}
                >
                  {link.type}
                </Button>
              ))}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProjectsGrid;