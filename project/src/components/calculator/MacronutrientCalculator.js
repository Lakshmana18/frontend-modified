// import React, { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Button, VStack, Heading,Text } from '@chakra-ui/react';

// const MacronutrientCalculator = () => {
//   const [calories, setCalories] = useState('');
//   const [proteinRatio, setProteinRatio] = useState('');
//   const [fatRatio, setFatRatio] = useState('');
//   const [carbs, setCarbs] = useState(null);
//   const [protein, setProtein] = useState(null);
//   const [fat, setFat] = useState(null);

//   const calculateMacros = () => {
//     const proteinCalories = (parseFloat(proteinRatio) / 100) * calories;
//     const fatCalories = (parseFloat(fatRatio) / 100) * calories;
//     const carbCalories = calories - (proteinCalories + fatCalories);

//     setProtein(proteinCalories / 4);
//     setFat(fatCalories / 9);
//     setCarbs(carbCalories / 4);
//   };

//   return (
//     <Box
//     backgroundImage="url('/calorie1.jpg')" 
//         backgroundSize="cover"
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         minHeight="100vh"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         p={4}
//     >
//     <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
//       <Heading size="lg" mb={4}>Macronutrient Ratio Calculator</Heading>
//       <VStack spacing={4}>
//         <FormControl id="calories">
//           <FormLabel>Daily Calories</FormLabel>
//           <Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
//         </FormControl>
//         <FormControl id="protein-ratio">
//           <FormLabel>Protein Ratio (%)</FormLabel>
//           <Input type="number" value={proteinRatio} onChange={(e) => setProteinRatio(e.target.value)} />
//         </FormControl>
//         <FormControl id="fat-ratio">
//           <FormLabel>Fat Ratio (%)</FormLabel>
//           <Input type="number" value={fatRatio} onChange={(e) => setFatRatio(e.target.value)} />
//         </FormControl>
//         <Button colorScheme="teal" onClick={calculateMacros}>Calculate Macronutrients</Button>
//         {protein && fat && carbs && (
//           <Box mt={4}>
//             <Text>Protein: {protein.toFixed(2)} g</Text>
//             <Text>Fat: {fat.toFixed(2)} g</Text>
//             <Text>Carbs: {carbs.toFixed(2)} g</Text>
//           </Box>
//         )}
//       </VStack>
//     </Box>
//    </Box> 
//   );
// };

// export default MacronutrientCalculator;




import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Text } from '@chakra-ui/react';

const MacronutrientCalculator = () => {
  const [calories, setCalories] = useState('');
  const [proteinRatio, setProteinRatio] = useState('');
  const [fatRatio, setFatRatio] = useState('');
  const [carbs, setCarbs] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fat, setFat] = useState(null);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value >= 0 || value === '') {
      setter(value);
    }
  };

  const calculateMacros = () => {
    if (calories && proteinRatio && fatRatio) {
      const proteinCalories = (parseFloat(proteinRatio) / 100) * calories;
      const fatCalories = (parseFloat(fatRatio) / 100) * calories;
      const carbCalories = calories - (proteinCalories + fatCalories);

      setProtein(proteinCalories / 4);
      setFat(fatCalories / 9);
      setCarbs(carbCalories / 4);
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
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
        <Heading size="lg" mb={4}>Macronutrient Ratio Calculator</Heading>
        <VStack spacing={4}>
          <FormControl id="calories">
            <FormLabel>Daily Calories</FormLabel>
            <Input 
              type="number" 
              value={calories} 
              onChange={handleInputChange(setCalories)} 
            />
          </FormControl>
          <FormControl id="protein-ratio">
            <FormLabel>Protein Ratio (%)</FormLabel>
            <Input 
              type="number" 
              value={proteinRatio} 
              onChange={handleInputChange(setProteinRatio)} 
            />
          </FormControl>
          <FormControl id="fat-ratio">
            <FormLabel>Fat Ratio (%)</FormLabel>
            <Input 
              type="number" 
              value={fatRatio} 
              onChange={handleInputChange(setFatRatio)} 
            />
          </FormControl>
          <Button colorScheme="teal" onClick={calculateMacros}>Calculate Macronutrients</Button>
          {protein && fat && carbs && (
            <Box mt={4}>
              <Text>Protein: {protein.toFixed(2)} g</Text>
              <Text>Fat: {fat.toFixed(2)} g</Text>
              <Text>Carbs: {carbs.toFixed(2)} g</Text>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default MacronutrientCalculator;
