// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const WeightlifterPage = () => {
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
        <Heading as="h1" size="xl" color="black">Weightlifter Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        The act, art, or sport of lifting barbells of given poundages in a prescribed manner, as a competitive event or conditioning exercise.

        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1
Breakfast: scrambled eggs, stir-fried veggies, and oatmeal
Snack: whey protein shake
Lunch: grilled chicken breast, mixed greens, and baked sweet potato
Snack: hard-boiled egg(s) and carrot sticks
Dinner: broiled fish, green beans with brown rice<br/><br/>
Day 2

Breakfast: protein pancakes with fresh berries
Snack: apple slices and almonds
Lunch: lean ground beef burger on lettuce with tomato, onion, and green beans
Snack: protein shake
Dinner: shrimp stir-fried with bell pepper and brown rice over spinach<br/><br/>
Day 3

Breakfast: Greek yogurt, almonds or walnuts, whole grain granola, and fresh berries
Snack: protein shake
Lunch: grilled fish with a spinach salad and broccoli
Snack: egg white omelet with bell peppers and mushrooms
Dinner: chicken breast topped with fresh salsa with a sweet potato and a side salad<br/><br/>
Day 4

Breakfast: oatmeal with berries and scrambled egg whites
Snack: turkey breast with carrots and celery
Lunch: sirloin steak with broccoli and mushrooms
Snack: apples with natural nut butter
Dinner: broiled fish, brown rice, and a mixed green salad<br/><br/>
Day 5

Breakfast: protein shake with oatmeal
Snack: hard-boiled egg whites with sliced peppers and cucumbers
Lunch: grilled chicken with white bean and tomato salad
Snack: Greek yogurt with berries and nuts
Dinner: grilled fish with quinoa and green beans<br/><br/>
Day 6

Breakfast: scrambled egg whites with cheese, peppers, herbs, and Ezekiel bread
Snack: protein shake
Lunch: grilled chicken breast with bell peppers, black beans, and onions over romaine lettuce
Snack: apple and almonds
Dinner: sirloin steak with sweet potato and asparagus<br/><br/>
Day 7

Breakfast: Greek yogurt with whole grain granola and berries
Snack: turkey breast with carrots and celery sticks
Lunch: grilled chicken breast over spinach with sliced strawberries and almonds
Snack: protein shake
Dinner: shrimp stir-fried with peppers, onions, and broccoli over brown rice

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default WeightlifterPage;