// src/components/Experience.js

import React from 'react';
import { Box, Heading, Text, Image, Flex, Stack, Divider, Spacer } from '@chakra-ui/react';
import Internship2Logo from '../assets/geopogo.jpeg'; // Adjust the path if needed
import Internship1Logo from '../assets/yodaLabs.jpeg'; // Adjust the path if needed
import Internship3Logo from '../assets/gittyInc.jpeg'; // Adjust the path if needed

function Experience() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Flex justifyContent="center" alignItems="center">
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
            <Image src={Internship1Logo} alt="Internship 1" boxSize="100px" />
          </Box>
          <Divider orientation="vertical" height="20px" />
          <Box
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease-in-out"
          >
            <Image src={Internship3Logo} alt="Internship 2" boxSize="100px" />
          </Box>
          <Divider orientation="vertical" height="20px" color="black" />
          <Box
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease-in-out"
          >
            <Image src={Internship2Logo} alt="Internship 2" boxSize="100px" />
          </Box>
        </Stack>
        <Box
          className="experience-card"
          backgroundColor="white"
          boxShadow="lg"
          p={6}
          borderRadius="15px"
          width="80%"
          textAlign="left"
        >
          <Heading as="h2" size="lg" mb={2} color="black">
            Past Experience
          </Heading>
          <Text fontSize="lg" mb={2} color="black">
            <strong>Internship 1</strong> - Software Engineering Intern at Company 1
          </Text>
          <Text fontSize="md" mb={2} color="black">
            January 2024 - May 2024
          </Text>
          <Text fontSize="md" mb={2} color="black">
            Worked on developing backend services using Node.js and Express. Improved the performance of API endpoints and integrated various third-party services.
          </Text>
          <Spacer />
          <Text fontSize="lg" mb={2} color="black">
            <strong>Internship 1</strong> - Software Engineering Intern at Company 1
          </Text>
          <Text fontSize="md" mb={2} color="black">
            January 2024 - May 2024
          </Text>
          <Text fontSize="md" mb={2} color="black">
          Created 7 site pages using React for hiring platform connecting Managers and Recruiters within Next.js framework
Integrated a Job Posting ChatBot using AWS Lex, facilitating the creation of job postings.
Led API development using Node.js, streamlining interaction between managers and recruiters
Created JSON schemas to capture chatbot inputs for job postings stored in DynamoDB database; conducted comprehensive testing of API endpoints with Postman to validate data accuracy.
Contributed and to a team that developed an AI-driven matching algorithm, which improved hiring accuracy over previous methods by analyzing and matching recruiter submissions with job requirements.

          </Text>
          <Text fontSize="lg" mb={2} color="black">
            <strong>Internship 2</strong> - Software Engineering Intern at Company 2
          </Text>
          <Text fontSize="md" mb={2} color="black">
            May 2023 - August 2023
          </Text>
          <Text fontSize="md" mb={2} color="black">
          Worked in a cross-functional team, providing support and gaining insights into project lifecycle management.
Assisted in backend development for new UI features, enhancing the application’s performance and user experience.
Helped develop and prototype a new feature, tags, using ARKit/Swift to allow users to save and continue projects.
Utilized AWS Amplify and Amazon Cognito for authentication and managed data storage using Aurora RDS supporting millions of users concurrently.
Developed API endpoints for 'tags',  serving as bookmarks for users to save AR designs efficiently

          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Experience;
