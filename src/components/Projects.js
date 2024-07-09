import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Link, Button, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const projects = [
  {
    year: 2024,
    title: 'My personal Wensite',
    description: "The source of this website.",
    links: [
      { type: 'Source', url: 'https://github.com/your-repo/safezone' },
    ],
    stars: 3,
  },
  {
    year: 2023,
    title: 'SafeZone',
    description: "Play the accordion with your keyboard!",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 2,
  },
  {
    year: 2023,
    title: 'AI Recomendation Engine',
    description: "Play the accordion with your keyboard!",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 2,
  },
  {
    year: 2024,
    title: 'Video Convolution Processor',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
  },
  {
    year: 2024,
    title: 'JPMorgan Chase Software Engineering Virtual Experience',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
  },
  {
    year: 2024,
    title: 'Cricket Visualizer',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
  },
  {
    year: 2022,
    title: 'Notium',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
  },
  {
    year: 2022,
    title: 'Contest Calling',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Source', url: '#' },
    ],
    stars: 6727,
  },
  {
    year: 2020,
    title: 'Eudiemonia',
    description: "A free, open source notes app for the web.",
    links: [
      { type: 'Article', url: '#' },
    ],
    stars: 6727,
  },
  // Add more projects here
];

function ProjectsGrid() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardShadow = useColorModeValue('md', 'dark-lg');

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
                  mb={2}
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
