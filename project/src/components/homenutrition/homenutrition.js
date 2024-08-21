import React from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, Image } from '@chakra-ui/react';

const nutritionImage = 'https://th.bing.com/th/id/R.af15797a5f8f0b9515d4aaccb9a1d48f?rik=0rEUioPgWCqFag&riu=http%3a%2f%2fkatedrivernaturopath.com.au%2fwp-content%2fuploads%2f2014%2f05%2fnutrition-photo.png&ehk=iYHYHK5%2bO3kN8N2512GHTiho5B9fse0wemoyQ8a1K%2bU%3d&risl=&pid=ImgRaw&r=0';

const NutritionPage = () => {
  return (
    <ChakraProvider>
      <Box p={4} maxW="1200px" mx="auto">
        <VStack spacing={6} align="stretch">

          <Box mb={8}>
            <Heading as="h1" size="xl" mb={4}>What is Nutrition?</Heading>
            <Text fontSize="lg" mb={4}>
              Nutrition is the process by which organisms take in and utilize food materials. It is essential for maintaining health, supporting growth, and providing energy for everyday activities. 
              Proper nutrition involves a balanced intake of nutrients such as carbohydrates, proteins, fats, vitamins, and minerals. These nutrients are vital for various bodily functions, including metabolism, immune system function, and tissue repair.
            </Text>
            <Image src={nutritionImage} alt="Nutrition" borderRadius="md" />
          </Box>

        
          <Box>
            <Heading as="h2" size="lg" mb={4}>Why is Nutrition Important for Athletes?</Heading>
            <Text fontSize="lg" mb={4}>
              For athletes, nutrition plays a critical role in optimizing performance, recovery, and overall health. Here’s why:
            </Text>
            <Text fontSize="lg" mb={2}>
              <strong>1. Energy Levels:</strong> Proper nutrition ensures that athletes have the energy needed to sustain high levels of physical activity and endurance. Carbohydrates are particularly important as they provide a quick and efficient source of energy.
            </Text>
            <Text fontSize="lg" mb={2}>
              <strong>2. Muscle Repair and Growth:</strong> Protein intake is crucial for muscle repair and growth. After intense workouts or competitions, muscles need protein to recover and become stronger.
            </Text>
            <Text fontSize="lg" mb={2}>
              <strong>3. Immune Function:</strong> A well-balanced diet supports a strong immune system, reducing the risk of illness and injury, which is crucial for athletes who push their bodies to the limit.
            </Text>
            <Text fontSize="lg" mb={2}>
              <strong>4. Hydration:</strong> Staying hydrated is vital for maintaining optimal performance. Proper fluid intake helps regulate body temperature, prevent fatigue, and support overall bodily functions.
            </Text>
            <Text fontSize="lg" mb={2}>
              <strong>5. Mental Focus:</strong> Nutrition also impacts cognitive function and concentration, which are important for strategic thinking and decision-making during sports.
            </Text>
            <Text fontSize="lg">
              In summary, a well-rounded diet tailored to an athlete's specific needs can enhance performance, accelerate recovery, and contribute to long-term health and success in sports.
            </Text>
          </Box>

        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default NutritionPage;