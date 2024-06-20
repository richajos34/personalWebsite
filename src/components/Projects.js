import React from 'react';
import { Box, Heading, Text, SimpleGrid, Card, CardBody } from '@chakra-ui/react';

function Projects() {
  return (
    <Box id="projects" textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px">
        <Card>
          <CardBody>
            <Heading size="md">Project 1</Heading>
            <Text mt={4}>Description of project 1.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size="md">Project 2</Heading>
            <Text mt={4}>Description of project 2.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading size="md">Project 3</Heading>
            <Text mt={4}>Description of project 3.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
