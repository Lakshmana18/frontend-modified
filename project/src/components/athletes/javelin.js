import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const JavelinPage = () => {
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
        <Heading as="h1" size="xl" color="black">Javelin Throw Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Javelin throw is a track and field event where athletes throw a spear-like implement called a javelin as far as possible.


        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1:
•⁠  ⁠Breakfast: Scrambled eggs with spinach and tomatoes, whole-grain toast, and a side of fruit (e.g., berries or an apple).
•⁠  ⁠Snack: Greek yogurt with a tablespoon of honey and a handful of walnuts.
•⁠  ⁠Lunch: Grilled chicken breast with quinoa and steamed broccoli.
•⁠  ⁠Snack: Carrot sticks with hummus.
•⁠  ⁠Dinner: Baked salmon with sweet potato mash and a side salad (mixed greens, cucumber, and avocado).<br/><br/>
Day 2:
•⁠  ⁠Breakfast: Smoothie with banana, spinach, protein powder, and almond milk.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Lunch: Turkey and avocado wrap in a whole-grain tortilla with a side of mixed veggies.
•⁠  ⁠Snack: A small handful of mixed nuts.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and bell peppers.<br/><br/>
Day 3:
•⁠  ⁠Breakfast: Overnight oats with chia seeds, fresh berries, and a drizzle of almond butter.
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Lunch: Lentil soup with a side of whole-grain bread and a green salad.
•⁠  ⁠Snack: A piece of fruit (e.g., an orange) and a handful of sunflower seeds.
•⁠  ⁠Dinner: Grilled shrimp with wild rice and roasted asparagus.<br/><br/>
Day 4:
•⁠  ⁠Breakfast: Whole-grain cereal with milk, topped with sliced bananas and a sprinkle of flaxseeds.
•⁠  ⁠Snack: Smoothie with mixed berries, Greek yogurt, and a tablespoon of honey.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Hard-boiled eggs.
•⁠  ⁠Dinner: Baked cod with a side of quinoa and steamed green beans.<br/><br/>
Day 5:
•⁠  ⁠Breakfast: Whole-grain toast with avocado, poached eggs, and a side of mixed fruit.
•⁠  ⁠Snack: Greek yogurt with granola and a handful of fresh berries.
•⁠  ⁠Lunch: Tuna salad with mixed greens, cherry tomatoes, cucumber, and a light vinaigrette.
•⁠  ⁠Snack: Edamame or a small handful of almonds.
•⁠  ⁠Dinner: Turkey meatballs with whole-grain pasta and marinara sauce, plus a side salad.<br/><br/>
Day 6:
•⁠  ⁠Breakfast: Chia pudding made with almond milk, topped with mango slices and a few almonds.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Lunch: Chickpea and avocado salad with cherry tomatoes, cucumber, and a lemon-tahini dressing.
•⁠  ⁠Snack: A piece of dark chocolate and a small handful of mixed nuts.
•⁠  ⁠Dinner: Grilled chicken breast with a side of roasted Brussels sprouts and sweet potato wedges.<br/><br/>
Day 7:
•⁠  ⁠Breakfast: Egg white omelette with mushrooms, spinach, and a side of whole-grain toast.
•⁠  ⁠Snack: A pear with a handful of walnuts.
•⁠  ⁠Lunch: Quinoa bowl with black beans, corn, avocado, and salsa.
•⁠  ⁠Snack: Protein bar or a small smoothie.
•⁠  ⁠Dinner: Baked pork tenderloin with a side of sautéed kale and wild rice.


<br/>

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default JavelinPage;