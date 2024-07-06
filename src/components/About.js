import React from 'react';
import { Box, Flex, Heading, Text, Button, IconButton, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import profileImage from '../assets/profilePhoto.png'; // Add your profile image here

function About() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      id="about"
      bgImage="url('https://st4.depositphotos.com/1000423/24178/i/450/depositphotos_241782602-stock-photo-privacy-safety-concept.jpg')"
      bgSize="cover"
      bgPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      <Flex direction="column" align="center" bg="rgba(0, 0, 0, 0.7)" p={10} borderRadius="md">
        <IconButton
          aria-label="Toggle Light Mode"
          icon={colorMode === 'light' ? '🌙' : '☀️'}
          onClick={toggleColorMode}
          mb={4}
        />
        <Heading as="h1" size="2xl" mb={4}>
          I AM RICHA JOS
        </Heading>
        <Text fontSize="lg" mb={6} maxW="600px">
          I am a full stack developer with a passion for building scalable and responsive web applications. Currently pursuing a Bachelor of Science in Electrical Engineering and Computer Science, I have honed my skills in various programming languages, most notibly Java, Python, and C. My projects, reflect my commitment to leveraging technology to solve real-world problems and enhance the experiences of my peers around me. Beyond coding, I have a deep interest in artificial intelligence, exploring how AI can be integrated into everyday applications. When i'm not busy coding, I enjoy playing badminton, tennis, painting, and cooking!
        </Text>
        <Button colorScheme="teal" size="lg" mb={6}>
          Learn More
        </Button>
        <Flex justifyContent="center">
          <IconButton as="a" href="https://github.com/richajos34" icon={<FaGithub />} aria-label="GitHub" m={2} />
          <IconButton as="a" href="https://www.linkedin.com/in/richa-jos/" icon={<FaLinkedin />} aria-label="LinkedIn" m={2} />
          <IconButton as="a" href="mailto:richajos34@berkeley.edu" icon={<FaEnvelope />} aria-label="Email" m={2} />
          <IconButton as="a" href="/Users/richajos/Desktop/Projects/personalWebsite/src/assets/Resume_Richa_Jos.pdf" aria-label="Download Resume" icon={<FaFileDownload />} m={2} download/>
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
