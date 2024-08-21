// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const PolevaultPage = () => {
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
        <Heading as="h1" size="xl" color="black">Pole Vault Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Pole vault is a track and field event in which an athlete uses a long, flexible pole (usually made of fiberglass or carbon fiber) as an aid to leap over a high bar. The objective is to clear the bar without knocking it down. The athlete sprints down a runway, plants the pole into a box on the ground, and uses the pole to propel themselves upward and over the bar.

        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1
•⁠  ⁠Breakfast: Scrambled eggs with spinach, whole-grain toast, and a side of mixed berries.
•⁠  ⁠Snack: Greek yogurt with honey and a handful of almonds.
•⁠  ⁠Lunch: Grilled chicken breast with quinoa, steamed broccoli, and a side of mixed greens.
•⁠  ⁠Snack: Apple slices with peanut butter.
•⁠  ⁠Dinner: Baked salmon, sweet potato, roasted asparagus, and a mixed green salad.<br/><br/>
Day 2
•⁠  ⁠Breakfast: Oatmeal with sliced banana, chia seeds, and a drizzle of maple syrup.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Lunch: Turkey and avocado wrap on whole-grain bread, with a side of carrot sticks and hummus.
•⁠  ⁠Snack: A handful of mixed nuts and a piece of dark chocolate.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice, mixed bell peppers, and snap peas.<br/><br/>
Day 3
•⁠  ⁠Breakfast: Whole-grain pancakes with a side of scrambled eggs and mixed berries.
•⁠  ⁠Snack: Hard-boiled eggs with a sprinkle of sea salt.
•⁠  ⁠Lunch: Grilled chicken Caesar salad with whole grain croutons and a light dressing.
•⁠  ⁠Snack: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Dinner: Grilled shrimp with quinoa, roasted Brussels sprouts, and a side of mixed greens.<br/><br/>
Day 4
•⁠  ⁠Breakfast: Smoothie bowl with acai, granola, sliced banana, and mixed berries.
•⁠  ⁠Snack: Protein bar and a piece of fruit (e.g., apple or banana).
•⁠  ⁠Lunch: Quinoa salad with black beans, corn, avocado, cherry tomatoes, and lime vinaigrette.
•⁠  ⁠Snack: Sliced cucumber with hummus.
•⁠  ⁠Dinner: Lean beef stir-fry with brown rice, broccoli, and bell peppers.<br/><br/>
Day 5
•⁠  ⁠Breakfast: Greek yogurt with granola, mixed nuts, and a drizzle of honey.
•⁠  ⁠Snack: Orange slices and a handful of pistachios.
•⁠  ⁠Lunch: Whole grain wrap with grilled chicken, avocado, lettuce, and tomato, with a side of fresh fruit.
•⁠  ⁠Snack: Celery sticks with peanut butter.
•⁠  ⁠Dinner: Grilled chicken breast, mashed sweet potato, sautéed kale, and a side of quinoa.<br/><br/>
Day 6
•⁠  ⁠Breakfast: Omelette with mushrooms, spinach, and feta cheese, with whole-grain toast.
•⁠  ⁠Snack: Cottage cheese with sliced pear and a sprinkle of cinnamon.
•⁠  ⁠Lunch: Salmon fillet with wild rice, steamed asparagus, and a side salad.
•⁠  ⁠Snack: Protein smoothie with almond milk, mixed berries, and whey protein.
•⁠  ⁠Dinner: Whole wheat pasta with lean ground turkey, marinara sauce, and a side of mixed vegetables.<br/><br/>
Day 7
•⁠  ⁠Breakfast: Whole grain cereal with almond milk, mixed berries, and a handful of almonds.
•⁠  ⁠Snack: Greek yogurt with honey and walnuts.
•⁠  ⁠Lunch: Grilled chicken breast with quinoa, roasted vegetables, and a side of spinach salad.
•⁠  ⁠Snack: A banana with almond butter.
•⁠  ⁠Dinner: Baked cod with quinoa, roasted vegetables, and a side of mixed greens.



        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default PolevaultPage;