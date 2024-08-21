// // import React, { useState } from 'react';
// // import { Box, FormControl, FormLabel, Input, Button, VStack, Heading } from '@chakra-ui/react';

// // const HydrationCalculator = () => {
// //   const [weight, setWeight] = useState('');
// //   const [hydration, setHydration] = useState(null);

// //   const calculateHydration = () => {
// //     const dailyWaterIntake = weight * 0.033;
// //     setHydration(dailyWaterIntake);
// //   };

// //   return (
// //     <Box
// //     backgroundImage="url('/calorie1.jpg')" 
// //         backgroundSize="cover"
// //         backgroundPosition="center"
// //         backgroundRepeat="no-repeat"
// //         minHeight="100vh"
// //         display="flex"
// //         justifyContent="center"
// //         alignItems="center"
// //         p={4}
// //     >

// //     <Box p={6} 
// //     shadow="md" 
// //     borderWidth={1} 
// //     borderRadius="lg" 
// //     bg="white"
// //     height="375px"
// //     width="700px"
// //     >
// //       <Heading size="lg" mb={4}>Hydration Calculator</Heading>
// //       <VStack spacing={4}>
// //         <FormControl id="weight">
// //           <FormLabel>Weight (kg)</FormLabel>
// //           <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
// //         </FormControl><br/><br/>
// //         <Button colorScheme="teal" onClick={calculateHydration}>Calculate Hydration</Button>
// //         {hydration && <Box mt={4}>Your daily water intake: {hydration.toFixed(2)} liters</Box>}
// //       </VStack>
// //     </Box>
// //   </Box>
// //   );
// // };

// // export default HydrationCalculator;
// import React, { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

// const HydrationCalculator = () => {
//   const [weight, setWeight] = useState('');
//   const [hydration, setHydration] = useState(null);

//   const calculateHydration = () => {
//     const dailyWaterIntake = weight * 0.033;
//     setHydration(dailyWaterIntake);
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
//       <Box 
//         p={6} 
//         shadow="md" 
//         borderWidth={1} 
//         borderRadius="lg" 
//         bg="white"
//         width="800px"
//       >
//         <Grid templateColumns="2fr 1fr" gap={6}>
//           <GridItem>
//             <Heading size="lg" mb={4}>Hydration Calculator</Heading>
//             <VStack spacing={4}>
//               <FormControl id="weight">
//                 <FormLabel>Weight (kg)</FormLabel>
//                 <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//               </FormControl>
//               <Button colorScheme="teal" onClick={calculateHydration}>Calculate Hydration</Button>
//               {hydration && (
//                 <Box mt={4} fontWeight="bold">
//                   Your daily water intake: {hydration.toFixed(2)} liters
//                 </Box>
//               )}
//             </VStack>
//           </GridItem>

//           <GridItem>
//             <Box p={4} border="1px" borderRadius="md" borderColor="gray.200" bg="gray.50">
//               <Heading size="md" mb={4}>Hydration Tips</Heading>
//               <Text mb={2}>💧 Drink water consistently throughout the day, not just when you feel thirsty.</Text>
//               <Text mb={2}>💧 Carry a water bottle with you to remind yourself to drink.</Text>
//               <Text mb={2}>💧 Increase water intake during hot weather or when exercising.</Text>
//               <Text mb={2}>💧 Consider the water content in foods like fruits and vegetables.</Text>
//               <Text>💧 Limit drinks that can dehydrate, like alcohol and caffeinated beverages.</Text>
//             </Box>
//           </GridItem>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default HydrationCalculator;




import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

const HydrationCalculator = () => {
  const [weight, setWeight] = useState('');
  const [hydration, setHydration] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 0 || value === '') {
      setWeight(value);
    }
  };

  const calculateHydration = () => {
    if (weight) {
      const dailyWaterIntake = weight * 0.033;
      setHydration(dailyWaterIntake);
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
      <Box 
        p={6} 
        shadow="md" 
        borderWidth={1} 
        borderRadius="lg" 
        bg="white"
        width="800px"
      >
        <Grid templateColumns="2fr 1fr" gap={6}>
          <GridItem>
            <Heading size="lg" mb={4}>Hydration Calculator</Heading>
            <VStack spacing={4}>
              <FormControl id="weight">
                <FormLabel>Weight (kg)</FormLabel>
                <Input 
                  type="number" 
                  value={weight} 
                  onChange={handleInputChange} 
                />
              </FormControl>
              <Button colorScheme="teal" onClick={calculateHydration}>Calculate Hydration</Button>
              {hydration && (
                <Box mt={4} fontWeight="bold">
                  Your daily water intake: {hydration.toFixed(2)} liters
                </Box>
              )}
            </VStack>
          </GridItem>

          <GridItem>
            <Box p={4} border="1px" borderRadius="md" borderColor="gray.200" bg="gray.50">
              <Heading size="md" mb={4}>Hydration Tips</Heading>
              <Text mb={2}>💧 Drink water consistently throughout the day, not just when you feel thirsty.</Text>
              <Text mb={2}>💧 Carry a water bottle with you to remind yourself to drink.</Text>
              <Text mb={2}>💧 Increase water intake during hot weather or when exercising.</Text>
              <Text mb={2}>💧 Consider the water content in foods like fruits and vegetables.</Text>
              <Text>💧 Limit drinks that can dehydrate, like alcohol and caffeinated beverages.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default HydrationCalculator;
