import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const ArcheryPage = () => {
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
        <Heading as="h1" size="xl" color="black">Archery Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Archery is the practice or skill of using a bow to shoot arrows. It has been used historically for hunting and warfare, but today it's often pursued as a sport or recreational activity. Archery involves aiming and shooting arrows at a target, and it requires precision, control, and technique.

        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
    
Day 1
•⁠  ⁠Breakfast: Greek yogurt with honey, berries, and granola.
•⁠  ⁠Lunch: Grilled chicken salad with mixed greens, avocado, and a vinaigrette dressing.
•⁠  ⁠Snack: A handful of almonds and an apple.
•⁠  ⁠Dinner: Baked salmon with quinoa and steamed broccoli.<br/><br/>
Day 2
•⁠  ⁠Breakfast: Oatmeal with banana slices, chia seeds, and a dash of cinnamon.
•⁠  ⁠Lunch: Turkey and avocado wrap with whole grain tortilla and a side of carrot sticks.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Dinner: Stir-fried tofu with mixed vegetables and brown rice.<br/><br/>
Day 3
•⁠  ⁠Breakfast: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Lunch: Lentil soup with a side of whole-grain bread.
•⁠  ⁠Snack: Hummus with sliced bell peppers.
•⁠  ⁠Dinner: Grilled shrimp with sweet potato and a mixed green salad.<br/><br/>
Day 4
•⁠  ⁠Breakfast: Whole grain toast with avocado and poached eggs.
•⁠  ⁠Lunch: Quinoa and black bean salad with corn and a lime dressing.
•⁠  ⁠Snack: Greek yogurt with a handful of walnuts.
•⁠  ⁠Dinner: Lean beef stir-fry with broccoli, bell peppers, and brown rice.<br/><br/>
Day 5
•⁠  ⁠Breakfast: Chia pudding made with almond milk, topped with fresh berries.
•⁠  ⁠Lunch: Chicken and vegetable skewers with a side of couscous.
•⁠  ⁠Snack: An orange and a handful of mixed nuts.
•⁠  ⁠Dinner: Baked tilapia with a side of asparagus and wild rice.<br/><br/>
Day 6
•⁠  ⁠Breakfast: Smoothie bowl with mixed berries, spinach, and granola.
•⁠  ⁠Lunch: Spinach and feta stuffed chicken breast with a side of roasted vegetables.
•⁠  ⁠Snack: Sliced apple with almond butter.
•⁠  ⁠Dinner: Turkey chili with a side of whole-grain bread.<br/><br/>
Day 7
•⁠  ⁠Breakfast: Whole grain pancakes with fresh fruit and a drizzle of maple syrup.
•⁠  ⁠Lunch: Grilled portobello mushrooms with a side of farro and steamed green beans.
•⁠  ⁠Snack: A protein bar or shake.
•⁠  ⁠Dinner: Baked cod with a side of quinoa and roasted Brussels sprouts.

<br/>

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default ArcheryPage;