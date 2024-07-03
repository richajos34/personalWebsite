import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

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
      bg="gray.700"
      p={6}
      borderRadius="md"
      boxShadow="md"
      maxW="600px"
      mx="auto"
      my={10}
      color="white"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            bg="gray.800"
            borderColor="gray.600"
            _hover={{ borderColor: 'gray.500' }}
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            bg="gray.800"
            borderColor="gray.600"
            _hover={{ borderColor: 'gray.500' }}
          />
        </FormControl>
        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            bg="gray.800"
            borderColor="gray.600"
            _hover={{ borderColor: 'gray.500' }}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
