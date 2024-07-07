import React from 'react';
import { Box, Heading, Text, Image, Flex, Stack, Divider, Spacer, useColorModeValue } from '@chakra-ui/react';
import Internship2Logo from '../assets/geopogo.jpeg'; // Adjust the path if needed
import Internship1Logo from '../assets/yodaLabs.jpeg'; // Adjust the path if needed
import Internship3Logo from '../assets/gittyInc.jpeg'; // Adjust the path if needed

function Experience() {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardTextColor = useColorModeValue('black', 'white');
  const dividerColor = useColorModeValue('gray.400', 'gray.600');

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
          <Divider orientation="vertical" width="4px" height="40px" borderColor={dividerColor} />
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
          <Divider orientation="vertical" height="20px" borderColor={dividerColor} />
          <Box
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease-in-out"
          >
            <Image src={Internship2Logo} alt="Internship 3" boxSize="100px" />
          </Box>
        </Stack>
        <Box
          className="experience-card"
          backgroundColor={cardBg}
          boxShadow="lg"
          p={6}
          borderRadius="15px"
          width="80%"
          textAlign="left"
          color={cardTextColor}
        >
          <Heading as="h2" size="lg" mb={5}>
            Past Experience
          </Heading>
          <Text fontSize="xl" mb={2}>
            <strong>Software Engineering Intern</strong> - Yoda Labs
          </Text>
          <Text fontSize="md" mb={3}>
            January 2024 - May 2024
          </Text>
          <Text fontSize="md" mb={4}>
          I worked on a comprehensive audio transcription service that supports over 900 users, integrating real-time audio storage, user authentication, and advanced data processing features. The project utilized Python, Supabase, and React, and was deployed on Render. I implemented a robust RESTful API with Django, ensuring secure data transactions through role-based access controls. To enhance functionality, I integrated Whisperer and GPT-3.5 for accurate transcription and in-depth analysis of audio files, which effectively reduced manual processing time by over 50%. This system provided seamless real-time audio storage and user authentication, offering a reliable and efficient solution for managing and analyzing audio data.
          </Text>
          <Spacer />
          <Text fontSize="xl" mb={2}>
            <strong>Software Engineering Intern</strong> (Student Contract) - Gitty, Inc
          </Text>

          <Text fontSize="md" mb={3}>
            January 2024 - May 2024
          </Text>
          <Text fontSize="md" mb={4}>
          I worked to build a hiring platform using React within the Next.js framework, creating seven distinct site pages individually to automate the role of a job poster. With my team, I integrated a Job Posting ChatBot using AWS Lex, facilitating the creation of unlimited job postings. Leading the API development, I captured chatbot inputs for job postings stored in a DynamoDB database and conducted comprehensive testing of API endpoints with Postman to ensure data accuracy. I contributed to a team that developed an AI-driven matching algorithm, which significantly improved hiring accuracy by over 18%. 
          This algorithm utilized natural language processing for parsing job descriptions and candidate resumes, as well as logistic regression for matching to postings and predicting candidate-job fit.
          </Text>
          <Spacer />
          <Text fontSize="xl" mb={2}>
            <strong>Software Engineering Intern</strong> - Geopogo
          </Text>
          <Text fontSize="md" mb={2}>
            May 2023 - August 2023
          </Text>
          <Text fontSize="md" mb={2}>
            Worked in a cross-functional team, providing support and gaining insights into project lifecycle management.
            Assisted in backend development for new UI features, enhancing the application’s performance and user experience.
            Helped develop and prototype a new feature, tags, using ARKit/Swift to allow users to save and continue projects.
            Utilized AWS Amplify and Amazon Cognito for authentication and managed data storage using Aurora RDS supporting millions of users concurrently.
            Developed API endpoints for 'tags', serving as bookmarks for users to save AR designs efficiently.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Experience;
