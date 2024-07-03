import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Flex, useToast, Heading, Container } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
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
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
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
    <Box p={10} color="black">
      <Heading as="h2" size="xl" mb={6}>
        Get in touch
      </Heading>
      <Flex direction="right" align="center" w="full" maxW="1200px" justify="space-between">
      <form onSubmit={handleSubmit}>
        <FormControl id="firstName" isRequired mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="flushed"
            borderColor="gray.400"
            _focus={{ borderColor: 'gray.600' }}
          />
        </FormControl>
        <FormControl id="lastName" isRequired mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="flushed"
            borderColor="gray.400"
            _focus={{ borderColor: 'gray.600' }}
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="flushed"
            borderColor="gray.400"
            _focus={{ borderColor: 'gray.600' }}
          />
        </FormControl>
        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            borderColor="gray.400"
            _focus={{ borderColor: 'gray.600' }}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" mt={4}>
          Submit
        </Button>
      </form>
      </Flex>
    </Box>
  );
}

export default ContactForm;
