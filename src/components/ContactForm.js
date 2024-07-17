import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, useColorMode, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

import profileImageSrc from '../assets/profilePhoto.png';

/**
 * Renders a contact form component that allows users to send a message.
 * 
 * The component includes fields for the user's name, email, and message, as well as a submit button.
 * When the form is submitted, the message is sent using the emailjs library, and a success or error toast notification is displayed.
 * The component also includes a profile image and some text encouraging the user to get in touch.
 * 
 * @returns {JSX.Element} The contact form component
 */
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendAutoReply = () => {
      const autoReplyData = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };
    }

    const emailData = {
      ...formData,
      recipient_email: 'richajos24@gmail.com',
    };

    emailjs.send(
      'service_2daaoyk',
      'template_dhpnlwr',
      emailData,
      'aP31SpabS8vr0dJOB'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast({
        title: 'Message Sent.',
        description: "I've received your message and will get back to you shortly.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', message: '' });

      sendAutoReply();
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
