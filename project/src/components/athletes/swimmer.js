// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const SwimmerPage = () => {
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
        <Heading as="h1" size="xl" color="black">Swimmer Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        A swimmer is someone who engages in the activity of swimming, whether for recreation, fitness, or competition. Swimming involves moving through water using various techniques, such as freestyle, breaststroke, backstroke, and butterfly.


        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1

•⁠  ⁠Breakfast: Oatmeal with berries, a spoonful of honey, and a glass of low-fat milk.
•⁠  ⁠Snack: Greek yogurt with a handful of almonds.
•⁠  ⁠Lunch: Grilled chicken breast, quinoa, and a mixed green salad with olive oil and vinegar.
•⁠  ⁠Snack: Apple slices with peanut butter.
•⁠  ⁠Dinner: Baked salmon, sweet potato, and steamed broccoli.
•⁠  ⁠Evening Snack: Cottage cheese with sliced peaches.<br/><br/>
Day 2
•⁠  ⁠Breakfast: Whole grain toast with avocado and a poached egg.
•⁠  ⁠Snack: A smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Lunch: Turkey and avocado wrap with a side of carrot sticks.
•⁠  ⁠Snack: Trail mix (nuts and dried fruit).
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and mixed vegetables.
•⁠  ⁠Evening Snack: A small bowl of mixed berries.<br/><br/>
Day 3
•⁠  ⁠Breakfast: Scrambled eggs with spinach and whole-grain toast.
•⁠  ⁠Snack: A pear and a handful of walnuts.
•⁠  ⁠Lunch: Lentil soup with a side of whole-grain crackers.
•⁠  ⁠Snack: Hummus with cucumber and bell pepper slices.
•⁠  ⁠Dinner: Grilled shrimp, couscous, and roasted asparagus.
•⁠  ⁠Evening Snack: Greek yogurt with a drizzle of honey.<br/><br/>
Day 4
•⁠  ⁠Breakfast: Smoothie bowl with mixed berries, banana, and granola.
•⁠  ⁠Snack: Hard-boiled eggs and a piece of fruit.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Rice cakes with almond butter.
•⁠  ⁠Dinner: Baked tilapia, wild rice, and a side of steamed green beans.
•⁠  ⁠Evening Snack: A few squares of dark chocolate and a small handful of nuts.<br/><br/>
Day 5
•⁠  ⁠Breakfast: Whole grain cereal with milk and sliced banana.
•⁠  ⁠Snack: A smoothie with mixed fruits and a scoop of protein powder.
•⁠  ⁠Lunch: Tuna salad with mixed greens and a vinaigrette dressing.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Dinner: Turkey meatballs with spaghetti squash and marinara sauce.
•⁠  ⁠Evening Snack: A small bowl of cottage cheese with pineapple chunks.<br/><br/>
Day 6
•⁠  ⁠Breakfast: Chia seed pudding with berries and a spoonful of almond butter.
•⁠  ⁠Snack: An orange and a handful of sunflower seeds.
•⁠  ⁠Lunch: Grilled chicken salad with a variety of vegetables and a whole grain roll.
•⁠  ⁠Snack: Celery sticks with hummus.
•⁠  ⁠Dinner: Baked cod, quinoa, and a side of roasted Brussels sprouts.
•⁠  ⁠Evening Snack: A smoothie with spinach, protein powder, and a piece of fruit.<br/><br/>
Day 7
•⁠  ⁠Breakfast: Whole grain pancakes with fresh fruit and a dollop of Greek yogurt.
•⁠  ⁠Snack: A banana and a handful of mixed nuts.
•⁠  ⁠Lunch: Beef and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: A small bowl of mixed berries.
•⁠  ⁠Dinner: Stuffed bell peppers with ground turkey and a side of sautéed spinach.
•⁠  ⁠Evening Snack: A small bowl of oatmeal with a spoonful of honey.


        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default SwimmerPage;