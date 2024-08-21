import React from 'react';
import {
  Box,
  Heading,
  Text,
  Select,
  VStack,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const MealPlanning = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, blue.100, purple.100)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Container
        maxW="md"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="xl"
      >
        <VStack spacing={6} align="start">
          <Heading as="h1" size="2xl" color="blue.700">
            Meal Planning for Athletes
          </Heading>

          <Text fontSize="lg" color="gray.600">
            Meal planning is essential for athletes to ensure they get the right
            nutrients to fuel their training and recovery. A well-balanced diet
            can enhance performance, prevent injuries, and help achieve
            personal fitness goals.
          </Text>

          <Text fontSize="md" color="gray.500">
            Choose your type of sport to learn more about specific meal plans:
          </Text>

          <Select
            placeholder="Select athlete type"
            focusBorderColor="blue.500"
            variant="outline"
            bg="gray.50"
            size="lg"
            onChange={handleSelectChange}
          >
            <option value="longjump">Long Jump</option>
            <option value="polevault">Pole Vault</option>
            <option value="archery">Archery</option>
            <option value="wrestler">Wrestlers</option>
            <option value="runner">Runner</option>
            <option value="swimmer">Swimmer</option>
            <option value="marathon">Marathon</option>
            <option value="cyclist">Cyclist</option>
            <option value="javelin">Javelin Throw</option>
            <option value="hurdling">Hurdling</option>
            <option value="weightlifter">Weightlifter</option>
          </Select>

          <Text fontSize="sm" color="gray.400" pt={4}>
            Depending on the type of athlete, the nutritional needs can vary
            significantly. Select your sport from the dropdown above to learn
            more about how to tailor your diet to meet your athletic needs.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default MealPlanning;
