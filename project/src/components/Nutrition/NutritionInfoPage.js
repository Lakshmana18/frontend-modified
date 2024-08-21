import React from 'react';
import { Box, Text, SimpleGrid, Button, VStack, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NutritionInfoPage = () => {
  const navigate = useNavigate();

  const handleCalorieCalculatorClick = () => {
    navigate('/calorieCalculator');
  };

  const handleMacronutrientCalculatorClick = () => {
    navigate('/MacronutritionCalculator');
  };

  const handleHydrationCalculatorClick = () => {
    navigate('/HydrationCalculator');
  };

  const handleAddMealsClick = () => {
    navigate('/addmeal');
  };

  return (
    <Box 
      p={8} 
      backgroundImage="url('/countweb.jpg')" 
      backgroundSize="cover" 
      backgroundPosition="center" 
      backgroundRepeat="no-repeat" 
      minHeight="100vh" 
    >
      <VStack spacing={4} align="start" mb={8} bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold">
          Understanding Your Nutritional Needs
        </Text>
        <Text fontSize="lg">
          Proper nutrition is essential for athletes and fitness enthusiasts to optimize performance, recovery, and overall health.
          Knowing your calorie needs, macronutrient ratios, and hydration strategies is crucial in tailoring your diet to meet your goals.
        </Text>
        <Text fontSize="larger">
          <ul>
          <strong>Calorie Needs:</strong> 
          <li>Calories are essential for human health. The key is consuming the right amount.</li>
          <li>Everyone requires different amounts of energy each day, depending on age, sex, size, and activity level.</li>
          <li>People in the United States consume more than 11 percent of their daily calories from fast food.</li>
          <li>Foods high in energy but low in nutritional value provide empty calories.</li>
          </ul>
        </Text>
        <Text fontSize="larger">
          <strong>Macronutrient Ratios:</strong> 
          <ul>
            <li>Macronutrients provide the body with energy, help prevent disease, and allow the body to function correctly.</li>
            <li>Macronutrients are available in many food sources, but it can be difficult to determine the right amount to consume.</li>
            <li>There are also a number of factors that can influence the quantity of macronutrients people may need.</li>
          </ul>
        </Text>
        <Text fontSize="larger">
          <strong>Hydration Strategy:</strong> 
          <ul>
            <li>Water is one of the most important nutrients your body needs to function optimally. Dehydration occurs when you don’t replace the fluids you lose.</li>
            <li>Proper hydration is also a performance-nutrition strategy that can help lower your risk of heat illness and rhabdomyolysis.</li>
            <li>Water contributes 50–70% of total body mass and is compartmentalized within both intracellular (65%) and extracellular (35%) spaces</li>
          </ul>
        </Text>
      </VStack>

      <SimpleGrid columns={3} spacing={8} mb={12}>
        <Box p={6} borderWidth="1px" borderRadius="larger" bg="white" boxShadow="md">
          <Text fontSize="xl" mb={4}>
            Calorie Counter
          </Text>
          <Text mb={4}>
          Determining the right amount of calories ensures you are fueling your body adequately for your activity level.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleCalorieCalculatorClick}>
            Calorie 
          </Button>
        </Box>
        <Box p={6} borderWidth="1px" borderRadius="larger" bg="white" boxShadow="md">
          <Text fontSize="xl" mb={4}>
            Macronutrients Calculator
          </Text>
          <Text mb={4}>
          Balancing proteins, fats, and carbohydrates is key to supporting energy levels, muscle repair, and overall health.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleMacronutrientCalculatorClick}>
            Macronutrient
          </Button>
        </Box>
        <Box p={6} borderWidth="1px" borderRadius="larger" bg="white" boxShadow="md">
          <Text fontSize="xl" mb={4}>
            Hydration Strategy
          </Text>
          <Text mb={4}>
          Staying hydrated is vital for optimal performance and recovery, as it affects everything from energy levels.
          </Text>
          <Button colorScheme="teal" width="full" onClick={handleHydrationCalculatorClick}>
            Hydration
          </Button>
        </Box>
      </SimpleGrid>

      {/* <Center>
        <Box
          maxW="lg"
          p={6}
          borderWidth="1px"
          borderRadius="md"
          bg="gray.50"
          boxShadow="lg"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Add Meals
          </Text>
          <Text mb={4}>
            Here you can select meals for <strong>Breakfast</strong>, <strong>Lunch</strong>, and <strong>Dinner</strong>.
          </Text>
          <Button colorScheme="teal" onClick={handleAddMealsClick}>
            Enter
          </Button>
        </Box>
      </Center> */}
    </Box>
  );
};

export default NutritionInfoPage;
