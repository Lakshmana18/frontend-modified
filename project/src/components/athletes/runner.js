// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const RunnerPage = () => {
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
        <Heading as="h1" size="xl" color="black">Runner Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        A runner is someone who participates in running, either as a sport or as a form of exercise.

        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1:
•⁠  ⁠Breakfast: Oatmeal with fresh berries, chia seeds, and a scoop of protein powder.
•⁠  ⁠Snack: Greek yogurt with honey and almonds.
•⁠  ⁠Lunch: Grilled chicken salad with mixed greens, quinoa, avocado, and a vinaigrette.
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Dinner: Baked salmon with roasted sweet potatoes and steamed broccoli.<br/><br/>
Day 2:
•⁠  ⁠Breakfast: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Lunch: Turkey and avocado wrap with whole-grain tortilla and a side of mixed veggies.
•⁠  ⁠Snack: Handful of mixed nuts.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and a mix of bell peppers, carrots, and snap peas.<br/><br/>
Day 3:
•⁠  ⁠Breakfast: Whole-grain toast with scrambled eggs and spinach.
•⁠  ⁠Snack: Fresh fruit, like an orange or a handful of berries.
•⁠  ⁠Lunch: Lentil soup with a side salad and whole-grain crackers.
•⁠  ⁠Snack: Carrot sticks with hummus.
•⁠  ⁠Dinner: Grilled shrimp with quinoa and roasted asparagus.<br/><br/>
Day 4:
•⁠  ⁠Breakfast: Chia pudding made with almond milk and topped with sliced bananas and walnuts.
•⁠  ⁠Snack: Smoothie with mixed berries, Greek yogurt, and a bit of honey.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: A small handful of trail mix.
•⁠  ⁠Dinner: Baked cod with a side of steamed green beans and sweet potato mash.<br/><br/>
Day 5:
•⁠  ⁠Breakfast: Whole-grain cereal with milk and fresh fruit.
•⁠  ⁠Snack: Hard-boiled eggs.
•⁠  ⁠Lunch: Tuna salad with mixed greens, cherry tomatoes, cucumbers, and a light dressing.
•⁠  ⁠Snack: Edamame or a small serving of mixed seeds.
•⁠  ⁠Dinner: Turkey meatballs with whole-grain pasta and marinara sauce, and a side salad.<br/><br/>
Day 6:
•⁠  ⁠Breakfast: Smoothie bowl with spinach, frozen mango, protein powder, and granola topping.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Lunch: Chickpea and avocado salad with cherry tomatoes, cucumber, and a lemon-tahini dressing.
•⁠  ⁠Snack: A piece of dark chocolate and a handful of berries.
•⁠  ⁠Dinner: Grilled pork tenderloin with a side of roasted Brussels sprouts and wild rice.<br/><br/>
Day 7:
•⁠  ⁠Breakfast: Egg white omelette with mushrooms, spinach, and a side of whole-grain toast.
•⁠  ⁠Snack: Sliced pear with a handful of walnuts.
•⁠  ⁠Lunch: Quinoa bowl with black beans, corn, avocado, and salsa.
•⁠  ⁠Snack: Protein bar or shake.
•⁠  ⁠Dinner: Baked chicken breast with a side of sautéed kale and sweet potato wedges.


        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default RunnerPage;