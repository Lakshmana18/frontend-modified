import React from 'react';
import { Box, Heading, Text, Container, Image, VStack } from '@chakra-ui/react';

const CyclistPage = () => {
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
        <Heading as="h1" size="xl" color="black">Cyclist Meal Plan</Heading>

        {/* Example Image */}
        {/* <Image
          src=""
          alt="Long Jump Athlete"
          borderRadius="md"
          boxSize="full"
          objectFit="cover"
        /> */}

        <Text mt={4}>
        Cycling is the activity of riding a bicycle, either for transportation, recreation, sport, or fitness. It involves propelling a bicycle forward using a combination of pedaling and the bicycle's mechanical components.


        </Text>

        {/* Additional Content */}
        <Text fontWeight="bold">Sample Meal Plan:</Text>
        <Text>
        7-Day Diet Plan <br/><br/><br/>
        Day 1
•⁠  ⁠Breakfast: Oatmeal with mixed berries, chia seeds, and a drizzle of honey.
•⁠  ⁠Snack: Greek yogurt with a handful of granola.
•⁠  ⁠Lunch: Grilled chicken breast, quinoa, and a mixed vegetable salad with olive oil and vinegar.
•⁠  ⁠Snack: Apple slices with almond butter.
•⁠  ⁠Dinner: Baked salmon, sweet potato, and steamed broccoli.
•⁠  ⁠Evening Snack: A small bowl of cottage cheese with pineapple chunks.<br/><br/>
Day 2
•⁠  ⁠Breakfast: Smoothie with spinach, banana, mixed berries, and protein powder.
•⁠  ⁠Snack: A handful of trail mix (nuts and dried fruit).
•⁠  ⁠Lunch: Turkey and avocado wrap with a side of carrot sticks.
•⁠  ⁠Snack: Rice cakes with hummus.
•⁠  ⁠Dinner: Stir-fried tofu with brown rice and mixed vegetables.
•⁠  ⁠Evening Snack: A small bowl of Greek yogurt with a drizzle of honey.<br/><br/>
Day 3
•⁠  ⁠Breakfast: Scrambled eggs with spinach and whole grain toast.
•⁠  ⁠Snack: A pear and a handful of walnuts.
•⁠  ⁠Lunch: Lentil soup with a side of whole-grain crackers.
•⁠  ⁠Snack: Sliced bell peppers with guacamole.
•⁠  ⁠Dinner: Grilled shrimp, couscous, and roasted asparagus.
•⁠  ⁠Evening Snack: A small bowl of mixed berries.<br/><br/>
Day 4
•⁠  ⁠Breakfast: Whole grain pancakes with fresh fruit and a dollop of Greek yogurt.
•⁠  ⁠Snack: Hard-boiled eggs and a piece of fruit.
•⁠  ⁠Lunch: Chicken and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Celery sticks with almond butter.
•⁠  ⁠Dinner: Baked tilapia, wild rice, and steamed green beans.
•⁠  ⁠Evening Snack: A few squares of dark chocolate and a small handful of nuts.<br/><br/>
Day 5
•⁠  ⁠Breakfast: Overnight oats with chia seeds, mixed berries, and a spoonful of honey.
•⁠  ⁠Snack: A smoothie with mixed fruits and a scoop of protein powder.
•⁠  ⁠Lunch: Tuna salad with mixed greens and a vinaigrette dressing.
•⁠  ⁠Snack: Apple slices with peanut butter.
•⁠  ⁠Dinner: Turkey meatballs with spaghetti squash and marinara sauce.
•⁠  ⁠Evening Snack: A small bowl of cottage cheese with fresh fruit.<br/><br/>
Day 6
•⁠  ⁠Breakfast: Chia seed pudding with almond milk, topped with fresh berries and nuts.
•⁠  ⁠Snack: An orange and a handful of sunflower seeds.
•⁠  ⁠Lunch: Grilled chicken salad with a variety of vegetables and a whole grain roll.
•⁠  ⁠Snack: Greek yogurt with granola.
•⁠  ⁠Dinner: Baked cod, quinoa, and roasted Brussels sprouts.
•⁠  ⁠Evening Snack: A smoothie with spinach, protein powder, and a piece of fruit.<br/><br/>
Day 7
•⁠  ⁠Breakfast: Whole grain toast with avocado, a poached egg, and a side of mixed fruit.
•⁠  ⁠Snack: A banana and a handful of mixed nuts.
•⁠  ⁠Lunch: Beef and vegetable stir-fry with brown rice.
•⁠  ⁠Snack: Rice cakes with almond butter.
•⁠  ⁠Dinner: Stuffed bell peppers with ground turkey and a side of sautéed spinach.
•⁠  ⁠Evening Snack: A small bowl of oatmeal with a spoonful of honey.


<br/>

        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default CyclistPage;