import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Link, useColorModeValue } from '@chakra-ui/react';

// Import images
import WDB from '../assets/wdb.png';
import CSK from '../assets/csk.png';
import whizara from '../assets/whizara.png';

const extracurriculars = [
  {
    title: 'Full-Stack Developer',
    description: 'Worked on a team to develop a full-stack web application for a local buisnesss.',
    link: 'https://www.webatberkeley.org/',
    linkTitle: 'Web Development at Berkeley',
    linkImage: WDB
  },
  {
    title: 'Coding Instructor',
    description: 'Taught coding to students at local schools in Berkeley and Oakland.',
    link: 'https://www.whizara.com/',
    linkTitle: 'Whizara',
    linkImage: whizara 
  },
  {
    title: 'Teaching Assistant',
    description: 'Provided an introduction to CS61A to unrepresented students at UC Berkeley.',
    link: 'https://www.instagram.com/cs.kickstart/',
    linkTitle: 'Computer Science Kickstart',
    linkImage: CSK 
  }
];

function Extracurriculars() {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardColor = useColorModeValue('black', 'white');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Extracurricular Activities
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {extracurriculars.map((activity, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={cardBg}
            color={cardColor}
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Heading fontSize="xl">{activity.title}</Heading>
            <Text mt={4}>{activity.description}</Text>
            <Link href={activity.link} isExternal mt={4} display="block">
              <Box
                display="flex"
                alignItems="center"
                mt={4}
                p={2}
                border="1px"
                borderColor={cardBorderColor}
                borderRadius="md"
                _hover={{ bg: cardHoverBg }}
              >
                <Image src={activity.linkImage} alt={`Preview of ${activity.link}`} borderRadius="md" boxSize="50px" mr={4} />
                <Text>{activity.linkTitle}</Text>
              </Box>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Extracurriculars;
