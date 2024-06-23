import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
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
import '/Users/richajos/Desktop/Projects/personalWebsite/src/css/projects.css'; // Make sure to create and import your custom CSS file

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };
  

  return (
    <Box id="projects" textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Projects
      </Heading>
      <Slider {...settings}>
        <Box p={4} className="flip-card">
          <Box className="flip-card-inner">
            <Box className="flip-card-front" p={4}>
              <Heading size="md" mt={4}>SafeZone</Heading>
              <Text mt={4}>Interactive map application used for visualizing UC Berkeley's Crime data.</Text>
              <Flex mt={4} justifyContent="center" alignItems="center">
                <Image src={springLogo} alt="Spring Logo" boxSize="40px" mx={2} />
                <Image src={javaLogo} alt="Java Logo" boxSize="40px" mx={2} />
                <Image src={javaScriptLogo} alt="JavaScript Logo" boxSize="40px" mx={2} />
                <Image src={mongoDB} alt="Mongo DB Logo" boxSize="40px" mx={2} />
                <Image src={html} alt="HTML Logo" boxSize="40px" mx={2} />
                <Image src={css} alt="CSS Logo" boxSize="40px" mx={2} />
              </Flex>
            </Box>
            <Box className="flip-card-back" p={4}>
              <Heading size="md" mt={4}>SafeZone</Heading>
              <Text mt={4}>Detailed information about the SafeZone project, including its features and technologies used.</Text>
            </Box>
          </Box>
        </Box>
        <Box p={4} className="flip-card">
          <Box className="flip-card-inner">
            <Box className="flip-card-front" p={4}>
              <Heading size="md" mt={4}>Cricket Visualizer</Heading>
              <Text mt={4}>A simulation of a cricket game with optimal cricket passing algorithms and data structures.</Text>
              <Flex mt={4} justifyContent="center" alignItems="center">
                <Image src={python} alt="Python Logo" boxSize="40px" mx={2} />
              </Flex>
            </Box>
            <Box className="flip-card-back" p={4}>
              <Heading size="md" mt={4}>Cricket Visualizer</Heading>
              <Text mt={4}>Detailed information about the Cricket Visualizer project, including its features and technologies used.</Text>
            </Box>
          </Box>
        </Box>
        <Box p={4} className="flip-card">
          <Box className="flip-card-inner">
            <Box className="flip-card-front" p={4}>
              <Heading size="md" mt={4}>Notium</Heading>
              <Text mt={4}>A full-stack replica of the popular note-taking website Notion.</Text>
              <Flex mt={4} justifyContent="center" alignItems="center">
                <Image src={docker} alt="Docker Logo" boxSize="40px" mx={2} />
                <Image src={nodejs} alt="Node.js Logo" boxSize="40px" mx={2} />
                <Image src={mongoDB} alt="Mongo DB Logo" boxSize="40px" mx={2} />
                <Image src={reactLogo} alt="React Logo" boxSize="40px" mx={2} />
                <Image src={javaScriptLogo} alt="JavaScript Logo" boxSize="40px" mx={2} />
              </Flex>
            </Box>
            <Box className="flip-card-back" p={4}>
              <Heading size="md" mt={4}>Notium</Heading>
              <Text mt={4}>Detailed information about the Notium project, including its features and technologies used.</Text>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default Projects;
