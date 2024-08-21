// import React, { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Grid, GridItem, Text } from '@chakra-ui/react';

// const CalorieCalculator = () => {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [age, setAge] = useState('');
//   const [calories, setCalories] = useState(null);

//   const calculateCalories = () => {
//     const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//     setCalories(bmr);
//   };

//   return (
//     <Box
//       backgroundImage="url('/calorie1.jpg')" 
//       backgroundSize="cover"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//       minHeight="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       p={4}
//     >
//       <Box p={6} shadow="larger" borderWidth="1px" borderRadius="lg" backgroundColor="white">
//         <Heading size="lg" mb={4}>Calorie Needs Calculator</Heading>
//         <VStack spacing={4}>
//           <Grid templateColumns="1fr 2fr" gap={4} alignItems="center">
//             <GridItem>
//               <FormLabel>Weight (kg)</FormLabel>
//               <Text fontSize="sm" color="gray.600">
//                 Enter your weight in kilograms (e.g., 70).
//               </Text>
//             </GridItem>
//             <GridItem>
//               <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//             </GridItem>

//             <GridItem>
//               <FormLabel>Height (cm)</FormLabel>
//               <Text fontSize="sm" color="gray.600">
//                 Enter your height in centimeters (e.g., 175).
//               </Text>
//             </GridItem>
//             <GridItem>
//               <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//             </GridItem>

//             <GridItem>
//               <FormLabel>Age (years)</FormLabel>
//               <Text fontSize="sm" color="gray.600">
//                 Enter your age in years (e.g., 25).
//               </Text>
//             </GridItem>
//             <GridItem>
//               <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//             </GridItem>
//           </Grid>
          
//           <Button colorScheme="teal" onClick={calculateCalories}>Calculate Calories</Button>
//           {calories && <Box mt={4}>Your daily calorie needs: {calories.toFixed(2)} kcal</Box>}
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// export default CalorieCalculator;



import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Grid, GridItem, Text } from '@chakra-ui/react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState(null);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value >= 0 || value === '') {
      setter(value);
    }
  };

  const calculateCalories = () => {
    if (weight && height && age) {
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      setCalories(bmr);
    }
  };

  return (
    <Box
      backgroundImage="url('/calorie1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Box p={6} shadow="larger" borderWidth="1px" borderRadius="lg" backgroundColor="white">
        <Heading size="lg" mb={4}>Calorie Needs Calculator</Heading>
        <VStack spacing={4}>
          <Grid templateColumns="1fr 2fr" gap={4} alignItems="center">
            <GridItem>
              <FormLabel>Weight (kg)</FormLabel>
              <Text fontSize="sm" color="gray.600">
                Enter your weight in kilograms (e.g., 70).
              </Text>
            </GridItem>
            <GridItem>
              <Input
                type="number"
                value={weight}
                onChange={handleInputChange(setWeight)}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Height (cm)</FormLabel>
              <Text fontSize="sm" color="gray.600">
                Enter your height in centimeters (e.g., 175).
              </Text>
            </GridItem>
            <GridItem>
              <Input
                type="number"
                value={height}
                onChange={handleInputChange(setHeight)}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Age (years)</FormLabel>
              <Text fontSize="sm" color="gray.600">
                Enter your age in years (e.g., 25).
              </Text>
            </GridItem>
            <GridItem>
              <Input
                type="number"
                value={age}
                onChange={handleInputChange(setAge)}
              />
            </GridItem>
          </Grid>
          
          <Button colorScheme="teal" onClick={calculateCalories}>
            Calculate Calories
          </Button>

          {calories && (
            <Box mt={4}>
              Your daily calorie needs: {calories.toFixed(2)} kcal
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default CalorieCalculator;

