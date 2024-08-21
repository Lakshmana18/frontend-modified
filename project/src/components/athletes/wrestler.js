// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const WrestlerPage = () => {
  return (
    <Box
    minH="100vh"
    bgGradient="linear(to-r, blue.100, purple.100)"
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={4}
  >
    <Container maxW="xl" bg="white" p={8} borderRadius="lg" boxShadow="md">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl" color="black">Wrestlers Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Wrestling is a form of physical competition where two opponents engage in hand-to-hand combat to pin each other to the ground or achieve other predetermined goals


        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1:
•⁠  ⁠Breakfast: Oatmeal with berries and a protein shake.
•⁠  ⁠Lunch: Grilled chicken breast, quinoa, and mixed vegetables.
•⁠  ⁠Snack: Greek yogurt with a handful of nuts.
•⁠  ⁠Dinner: Baked salmon, sweet potato, and steamed broccoli.<br/><br/>
Day 2:
•⁠  ⁠Breakfast: Scrambled eggs with spinach and whole-grain toast.
•⁠  ⁠Lunch: Turkey and avocado wrap with a side salad.
•⁠  ⁠Snack: Cottage cheese with pineapple.
•⁠  ⁠Dinner: Lean beef stir-fry with bell peppers and brown rice.<br/><br/>
Day 3:
•⁠  ⁠Breakfast: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Lunch: Tuna salad with mixed greens and whole-grain crackers.
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Dinner: Grilled chicken with roasted Brussels sprouts and wild rice.<br/><br/>
Day 4:
•⁠  ⁠Breakfast: Greek yogurt parfait with granola and mixed fruit.
•⁠  ⁠Lunch: Lentil soup with a side of whole-grain bread.
•⁠  ⁠Snack: Hummus with carrot sticks.
•⁠  ⁠Dinner: Baked cod with asparagus and a quinoa salad.<br/><br/>
Day 5:
•⁠  ⁠Breakfast: Whole-grain pancakes with a side of fresh fruit.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Protein bar and a banana.
•⁠  ⁠Dinner: Turkey meatballs with spaghetti squash and marinara sauce.<br/><br/>
Day 6:
•⁠  ⁠Breakfast: Smoothie bowl with berries, chia seeds, and a dollop of yogurt.
•⁠  ⁠Lunch: Shrimp and avocado salad with a citrus vinaigrette.
•⁠  ⁠Snack: Hard-boiled eggs and a handful of almonds.
•⁠  ⁠Dinner: Grilled pork chops with sautéed green beans and sweet potato mash.<br/><br/>
Day 7:
•⁠  ⁠Breakfast: Avocado toast with poached eggs and a side of fruit.
•⁠  ⁠Lunch: Beef and vegetable kebabs with a side of couscous.
•⁠  ⁠Snack: Mixed berries and a handful of walnuts.
•⁠  ⁠Dinner: Chicken fajitas with peppers, onions, and a side of black beans.

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default WrestlerPage;