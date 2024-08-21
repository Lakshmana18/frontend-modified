import React from 'react';
import { Box, Text, VStack, Divider, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      p={8}
      maxW="lg"
      mx="auto"
      bg="gray.50"
      borderRadius="lg"
      boxShadow="lg"
      my={12}
      transition="all 0.3s ease"
      _hover={{ boxShadow: '2xl', transform: 'scale(1.02)' }}
    >
      <VStack spacing={6} align="start">
        <Text
          fontSize={isMobile ? '2xl' : '3xl'}
          fontWeight="bold"
          color="teal.600"
          textAlign={isMobile ? 'center' : 'left'}
          mb={4}
        >
          Contact Us
        </Text>
        
        <Box
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          width="full"
          textAlign={isMobile ? 'center' : 'left'}
        >
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="teal.500"
            mb={4}
          >
            Support
          </Text>
          
          <Flex direction={isMobile ? 'column' : 'row'} align="center" justify={isMobile ? 'center' : 'flex-start'} mb={4}>
            <Icon as={FaPhone} color="teal.500" boxSize={6} mr={isMobile ? 0 : 3} mb={isMobile ? 2 : 0} />
            <Text fontSize="lg">+919283746501</Text>
          </Flex>
          
          <Flex direction={isMobile ? 'column' : 'row'} align="center" justify={isMobile ? 'center' : 'flex-start'}>
            <Icon as={FaEnvelope} color="teal.500" boxSize={6} mr={isMobile ? 0 : 3} mb={isMobile ? 2 : 0} />
            <Text fontSize="lg">wellnesscoders@gmail.com</Text>
          </Flex>
        </Box>

        <Divider orientation="horizontal" borderColor="teal.300" />

        <Text
          fontSize="lg"
          color="gray.600"
          textAlign={isMobile ? 'center' : 'left'}
        >
          If you have any questions or need further assistance, feel free to reach out to us using the contact details above.
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;
