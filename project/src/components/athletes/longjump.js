// pages/LongJumpPage.js
import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const LongJumpPage = () => {
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
        <Heading as="h1" size="xl" color="black">Long Jump Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
          Long Jump athletes require a specialized meal plan to enhance their explosive power, agility, and recovery. 
          A balanced diet rich in carbohydrates, proteins, and healthy fats is crucial for maintaining energy levels and 
          supporting muscle growth. Here is a sample meal plan tailored for Long Jump athletes:
        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
Day 1:
•⁠  ⁠Breakfast: Oatmeal with blueberries, chia seeds, and a scoop of protein powder.
•⁠  ⁠Snack: Greek yogurt with a tablespoon of honey and a handful of almonds.
•⁠  ⁠Lunch: Grilled chicken breast with quinoa and a mixed green salad (spinach, cucumber, cherry tomatoes, and avocado).
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Dinner: Baked salmon with roasted sweet potatoes and steamed broccoli.
<br/><br/>
Day 2:
•⁠  ⁠Breakfast: Smoothie with spinach, banana, protein powder, and almond milk.
•⁠  ⁠Snack: Cottage cheese with pineapple chunks.
•⁠  ⁠Lunch: Turkey and avocado wrap in a whole-grain tortilla with a side of mixed veggies.
•⁠  ⁠Snack: A small handful of mixed nuts.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and bell peppers.
<br/><br/>
Day 3:
•⁠  ⁠Breakfast: Whole-grain toast with scrambled eggs, spinach, and a side of fruit (e.g., berries or an apple).
•⁠  ⁠Snack: Fresh fruit (e.g., an orange) and a handful of sunflower seeds.
•⁠  ⁠Lunch: Lentil soup with a side salad (mixed greens, cucumbers, and a light vinaigrette).
•⁠  ⁠Snack: Carrot sticks with hummus.
•⁠  ⁠Dinner: Grilled shrimp with quinoa and roasted asparagus.
<br/><br/>
Day 4:
•⁠  ⁠Breakfast: Chia pudding made with almond milk, topped with sliced mango and a few almonds.
•⁠  ⁠Snack: Greek yogurt with granola.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Hard-boiled eggs.
•⁠  ⁠Dinner: Baked cod with a side of wild rice and steamed green beans.
<br/><br/>
Day 5:
•⁠  ⁠Breakfast: Smoothie bowl with mixed berries, spinach, protein powder, and topped with granola.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Lunch: Chickpea salad with avocado, cherry tomatoes, cucumber, and a lemon-tahini dressing.
•⁠  ⁠Snack: A piece of dark chocolate and a handful of walnuts.
•⁠  ⁠Dinner: Turkey meatballs with whole-grain pasta and marinara sauce, plus a side salad.
<br/><br/>
Day 6:
•⁠  ⁠Breakfast: Egg white omelette with mushrooms, spinach, and a side of whole-grain toast.
•⁠  ⁠Snack: Fresh fruit (e.g., a pear) with a handful of walnuts.
•⁠  ⁠Lunch: Quinoa bowl with black beans, corn, avocado, and salsa.
•⁠  ⁠Snack: Protein bar or a small smoothie.
•⁠  ⁠Dinner: Grilled chicken breast with roasted Brussels sprouts and sweet potato wedges.
<br/><br/>
Day 7:
•⁠  ⁠Breakfast: Whole-grain cereal with milk, topped with sliced bananas and a sprinkle of flaxseeds.
•⁠  ⁠Snack: Greek yogurt with a handful of fresh berries.
•⁠  ⁠Lunch: Tuna salad with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette.
•⁠  ⁠Snack: A handful of edamame.
•⁠  ⁠Dinner: Baked pork tenderloin with sautéed kale and a side of wild rice.
<br/>

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default LongJumpPage;