import React from 'react';
import { Box, Flex, Heading, Text, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

/**
 * The `About` component displays information about me, including my background, skills, and interests.
 * It renders a full-screen section with a background image and gradient overlay, and includes links to my GitHub, LinkedIn, and email.
 */
function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  const gradientOverlay = useColorModeValue(
    'linear(to-b, rgba(200, 255, 230, 1), rgba(255, 255, 255, 1))',
    'linear(to-b, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))'
  );

  return (
    <Box
      id="about"
      position="relative"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgColor={'gray.700'}
        bgSize="cover"
        bgPosition="center"
        zIndex="-1"
        _after={{
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          bgGradient: gradientOverlay,
        }}
      />
      <Flex direction="column" align="center" bg="rgba(0, 0, 0, 0.7)" p={10} borderRadius="md">
        <Heading as="h1" size="2xl" mt={5} mb={3}>
          Hello World,
        </Heading>
        <Text fontWeight='bold' fontSize="2xl" maxW="600px" mb={10}>
          I'm Richa!
        </Text>
        <Text fontSize="lg" maxW="600px" mb={6}>
          I am a full stack developer and hobbyist UI/UX designer with a passion for building scalable and responsive web applications. Currently pursuing a Bachelor of Science in Electrical Engineering and Computer Science, I have honed my skills in various programming languages, most notably through Java, Python, and JavaScript. My projects reflect my commitment to leveraging technology to solve real-world problems and enhance the experiences of my peers around me. Beyond coding, I have a deep interest in artificial intelligence, exploring how AI can be integrated into everyday applications. When I'm not busy coding, I enjoy playing badminton, tennis, painting, and cooking!
        </Text>
        <Flex justifyContent="center">
          <IconButton as="a" href="https://github.com/richajos34" icon={<FaGithub />} aria-label="GitHub" m={2} />
          <IconButton as="a" href="https://www.linkedin.com/in/richa-jos/" icon={<FaLinkedin />} aria-label="LinkedIn" m={2} />
          <IconButton as="a" href="mailto:richajos34@berkeley.edu" icon={<FaEnvelope />} aria-label="Email" m={2} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
