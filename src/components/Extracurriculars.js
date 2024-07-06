import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Link } from '@chakra-ui/react';

// Import images
import WDB from '../assets/wdb.png'; // Adjust the path as needed
import CSK from '../assets/csk.png'; // Replace with actual paths
import whizara from '../assets/whizara.png'; // Replace with actual paths

const extracurriculars = [
  {
    title: 'Full-Stack Developer',
    description: 'Participated in building and programming robots for various competitions.',
    link: 'https://www.webatberkeley.org/', // Replace with the actual link
    linkTitle: 'Web Development at Berkeley',
    linkImage: WDB // Replace with your preview image path
  },
  {
    title: 'Coding Instructor',
    description: 'Competed in inter-collegiate debates, honing public speaking and critical thinking skills.',
    link: 'https://www.whizara.com/', // Replace with the actual link
    linkTitle: 'Whizara',
    linkImage: whizara // Replace with your preview image path
  },
  {
    title: 'Teaching Assistant',
    description: 'Volunteered at local shelters and community events, providing support and services.',
    link: 'https://www.instagram.com/cs.kickstart/', // Replace with the actual link
    linkTitle: 'Computer Science Kickstart',
    linkImage: CSK // Replace with your preview image path
  },
];

function Extracurriculars() {
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
            bg="white"
            color="black"
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
                borderColor="gray.200"
                borderRadius="md"
                _hover={{ bg: 'gray.50' }}
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
