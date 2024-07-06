import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, useColorMode, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

import profileImageSrc from '../assets/profilePhoto.png'; // Adjust the path if needed

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();
  const { colorMode } = useColorMode(); // Access the current color mode
  const isDark = colorMode === 'dark';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast({
        title: 'Message Sent.',
        description: "We've received your message and will get back to you shortly.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch((err) => {
      console.log('FAILED...', err);
      toast({
        title: 'An error occurred.',
        description: 'Unable to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  return (
    <Box
      bg={isDark ? 'gray.700' : 'gray.100'}
      p={6}
      borderRadius="md"
      boxShadow="md"
      maxW="90%"
      mx="auto"
      my={10}
      color={isDark ? 'white' : 'black'}
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        <GridItem bg={isDark ? 'gray.800' : 'gray.50'} borderRadius="md" p={4}>
          <VStack spacing={4} align="center">
            <Image
              src= {profileImageSrc}
              alt="Profile Photo"
              borderRadius="full"
              boxSize="150px"
              objectFit="contain"
              mb={4}
            />
            <Text fontSize="lg" textAlign="center">
              Want to get in Touch?
            </Text>
            <Text fontSize="md" textAlign="center">
              Feel free to reach out to me for any questions or collaboration!
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                bg={isDark ? 'gray.800' : 'white'}
                borderColor={isDark ? 'gray.600' : 'gray.300'}
                _hover={{ borderColor: isDark ? 'gray.500' : 'gray.400' }}
              />
            </FormControl>
            <FormControl id="email" isRequired mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                bg={isDark ? 'gray.800' : 'white'}
                borderColor={isDark ? 'gray.600' : 'gray.300'}
                _hover={{ borderColor: isDark ? 'gray.500' : 'gray.400' }}
              />
            </FormControl>
            <FormControl id="message" isRequired mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                bg={isDark ? 'gray.800' : 'white'}
                borderColor={isDark ? 'gray.600' : 'gray.300'}
                _hover={{ borderColor: isDark ? 'gray.500' : 'gray.400' }}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Send Message
            </Button>
          </form>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContactForm;
