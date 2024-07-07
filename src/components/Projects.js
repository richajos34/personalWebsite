import React from 'react';
import { Box, Heading, Text, Image, Flex, Link, Button, useColorModeValue } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
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
import notium from '../assets/notium.png';
import '../css/projects.css';

function Projects() {
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardTextColor = useColorModeValue('black', 'white');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700');
  const buttonBg = useColorModeValue('teal.500', 'teal.200');
  const buttonTextColor = useColorModeValue('white', 'black');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const projectData = [
    {
      title: 'SafeZone',
      description: "Interactive map application used for visualizing UC Berkeley's Crime data.",
      technologies: [springLogo, javaLogo, javaScriptLogo, mongoDB, html, css],
      githubLink: 'https://github.com/your-repo/safezone',
      images: '../assets/safezone.png', // Add the path to your project image
    },
    {
      title: 'Cricket Visualizer',
      description: 'A simulation of a cricket game with optimal cricket passing algorithms and data structures.',
      technologies: [python],
      githubLink: 'https://github.com/your-repo/cricket-visualizer',
      images: '../assets/cricket-visualizer.png', // Add the path to your project image
    },
    {
      title: 'Video Convolution Processor',
      description: 'Optimized 2D convolutions for video processing to achieve significant speedups.',
      technologies: [docker, nodejs, mongoDB, reactLogo, javaScriptLogo],
      githubLink: 'https://github.com/your-repo/video-convolution-processor',
      image: '../assets/video-convolution-processor.png', // Add the path to your project image
    },
    {
      title: 'Notium',
      description: 'A full-stack replica of the popular note-taking website Notion.',
      technologies: [docker, nodejs, mongoDB, reactLogo, javaScriptLogo],
      githubLink: 'https://github.com/your-repo/notium',
      images: notium, // Add the path to your project image
    },
  ];

  return (
    <Box id="projects" textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Projects
      </Heading>
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <Box key={index} p={4} className="flip-card">
            <Box className="flip-card-inner">
              <Box className="flip-card-front" p={4} bg={cardBg} color={cardTextColor}>
                <Heading size="md" mt={4}>{project.title}</Heading>
                <Image src={project.images} alt={`${project.title} Image`} borderRadius="md" mb={4} width="80%" height="200px" objectFit="cover" /> {/* Project Image */}
                <Text mt={4}>{project.description}</Text>
                <Flex mt={4} justifyContent="center" alignItems="center">
                  {project.technologies.map((tech, techIndex) => (
                    <Image key={techIndex} src={tech} alt="Technology Logo" boxSize="40px" mx={2} />
                  ))}
                </Flex>
              </Box>
              <Box className="flip-card-back" p={4} bg={cardBg} color={cardTextColor}>
                <Heading size="md" mt={4}>{project.title}</Heading>
                <Text mt={4}>Detailed information about the {project.title} project, including its features and technologies used.</Text>
                <Link href={project.githubLink} isExternal mt={4} _hover={{ textDecoration: 'none' }}>
                  <Button rightIcon={<FaExternalLinkAlt />} bg={buttonBg} color={buttonTextColor} variant="outline" mt={4} p={2}>
                    Source
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Projects;
