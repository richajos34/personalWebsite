import React from 'react';
import { Box, Flex, Heading, Text, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  const gradientOverlay = useColorModeValue(
    'linear(to-b, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7))',
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
        //bgImage="url('https://t3.ftcdn.net/jpg/07/73/17/96/360_F_773179623_rMQ1L1EO0XmFm6pM1o51lO6SXyPDMktH.jpg')"
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
          I am a full stack developer with a passion for building scalable and responsive web applications. Currently pursuing a Bachelor of Science in Electrical Engineering and Computer Science, I have honed my skills in various programming languages, most notably through Java, Python, and JavaScript. My projects reflect my commitment to leveraging technology to solve real-world problems and enhance the experiences of my peers around me. Beyond coding, I have a deep interest in artificial intelligence, exploring how AI can be integrated into everyday applications. When I'm not busy coding, I enjoy playing badminton, tennis, painting, and cooking!
        </Text>
        <Button as="a" href='https://profuse-ruby-21e.notion.site/What-I-have-learned-during-my-4-year-coding-journey-ac1c0ab282404e4798f7690520a22cf6' colorScheme="teal" size="lg" mb={6}>
          Learn More
        </Button>
        <Flex justifyContent="center">
          <IconButton as="a" href="https://github.com/richajos34" icon={<FaGithub />} aria-label="GitHub" m={2} />
          <IconButton as="a" href="https://www.linkedin.com/in/richa-jos/" icon={<FaLinkedin />} aria-label="LinkedIn" m={2} />
          <IconButton as="a" href="mailto:richajos34@berkeley.edu" icon={<FaEnvelope />} aria-label="Email" m={2} />
          <IconButton as="a" href="/Users/richajos/Desktop/Projects/personalWebsite/src/assets/Resume_Richa_Jos.pdf" aria-label="Download Resume" icon={<FaFileDownload />} m={2} download />
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
