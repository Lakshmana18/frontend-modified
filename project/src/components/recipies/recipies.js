import React from 'react';
import { ChakraProvider, Box, Image, Text, Stack, Heading, Divider, SimpleGrid } from '@chakra-ui/react';

const recipes = [
  {
    name: 'Whole-grain pasta',
    image: 'https://th.bing.com/th/id/OIP.kN0SJ5GeeKdd6qMeDF5pigAAAA?rs=1&pid=ImgDetMain',
    ingredients: ['Whole-grain pasta', 'Olive oil', 'Garlic', 'Tomato sauce'],
    macronutrients: { protein: 12, carbs: 70, fats: 8 },
    calories: 265,
  },
  {
    name: 'Protein rich chicken curry',
    image: 'https://th.bing.com/th/id/OIP.RL2d9t-uzZCyl9N9XoINyQAAAA?rs=1&pid=ImgDetMain',
    ingredients: ['Chicken', 'Curry powder', 'Coconut milk', 'Onions'],
    macronutrients: { protein: 30, carbs: 10, fats: 20 },
    calories: 250,
  },
  {
    name: 'Vegan curry lentil',
    image: 'https://tastythriftytimely.com/wp-content/uploads/2022/03/Easy-Vegan-Red-Lentil-Curry-With-Coconut-Milk-6.jpg',
    ingredients: ['Red lentils', 'Coconut milk', 'Curry spices', 'Tomatoes'],
    macronutrients: { protein: 18, carbs: 45, fats: 5 },
    calories: 250,
  },
  {
    name: 'Thepla',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/methi-thepla.jpg',
    ingredients: ['Whole wheat flour', 'Fenugreek leaves', 'Spices', 'Yogurt'],
    macronutrients: { protein: 12, carbs: 40, fats: 8 },
    calories: 300,
  },
  {
    name: 'All-round veggies pulao',
    image: 'https://thespicemess.com/wp-content/uploads/2021/01/Vegetable-Pulao-21-feature-1280x904.jpg',
    ingredients: ['Basmati rice', 'Mixed vegetables', 'Spices', 'Onions'],
    macronutrients: { protein: 10, carbs: 60, fats: 7 },
    calories: 350,
  },
  {
    name: 'Healthy beetroot pav',
    image: 'https://1.bp.blogspot.com/-3PuU3WtwGqM/XoHbx9yDToI/AAAAAAAA5Og/OdjKUqz5S6MFVpNQVUV1Rm6pmnFySbEmQCEwYBhgLKs4DAMBZVoBXB2WWzncHhSbXM5vybJTXHWnTEswYqLyLwZwC1yCqdeVE4SP8eE_jMk8uLueMszspkOo3-AVQx80GhiTdiG0enw9uZAUomMJztJ7taeEfPM9Q3KaVhna5TebiJRXdFtMJLGoXh3M-DbRl4Dow9NfKbJewdbvLXYZwPUKIR_-PQZ9mv1zyWAM855Gxt-W2PcCeUUV2MKju3T91uQcdC4PGNm0JCsdnNR3FQsZsLoYA3EfRPJKPP4rILDIlNUlHX2W6G-mmk2lcGXfk7h9LxpThxpkPt3OqaAoGeXNJB7Z5CxoBnJ338KCsp6ieF3wlwuMUC_tboKyNhGN18QkDxFq4IWgpsI28XbTBPa9xAwXlaN6BQRVzzqbEYifhZag8RkxrD5J5rVzuWQqdwmRhO8hUM-CjcNsLufenV0Mifh8Kosb76NIMjr3u84YwjGI1fn8fefsm9YqL-_z19x92Zr-fI-Uxh787NVI-CFAWhVosA1qr5Dkxc-kew9ukpxvo6yj2ieuMMHPxfSu9nrRcOKnmE2JAI600pX_l6sQTD4usIWesPuK_eyhE4bdTmpkFyRxOm1G8bqNDdsoH-TjKuDw-c55ySWfDUUt7MKvLh_QF/s1600/beetroot-pav-bhaji-thali-pune.JPG',
    ingredients: ['Beetroot', 'Pav bread', 'Spices', 'Onions'],
    macronutrients: { protein: 8, carbs: 35, fats: 4 },
    calories: 250,
  },
  {
    name: 'Dry fruits oats porridge',
    image: 'https://th.bing.com/th/id/OIP.-jemTq9YegdB3lvtOgiBbgHaFj?rs=1&pid=ImgDetMain',
    ingredients: ['Oats', 'Almonds', 'Walnuts', 'Dates'],
    macronutrients: { protein: 10, carbs: 55, fats: 9 },
    calories: 300,
  },
  {
    name: 'Kale salad',
    image: 'https://th.bing.com/th/id/OIP.f3PhMMHImhfW5qAeLrZP-wHaLH?rs=1&pid=ImgDetMain',
    ingredients: ['Kale', 'Olive oil', 'Lemon juice', 'Chickpeas'],
    macronutrients: { protein: 8, carbs: 20, fats: 7 },
    calories: 180,
  },
  {
    name: 'Quinoa',
    image: 'https://images.media-allrecipes.com/userphotos/4516748.jpg',
    ingredients: ['Quinoa', 'Vegetable broth', 'Garlic', 'Onions'],
    macronutrients: { protein: 12, carbs: 39, fats: 4 },
    calories: 220,
  },
  {
    name: 'Roasted veggie pasta',
    image: 'https://th.bing.com/th/id/OIP.fIHgj7NfW0oOZ_lzMezwJgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ['Pasta', 'Mixed vegetables', 'Olive oil', 'Garlic'],
    macronutrients: { protein: 13, carbs: 60, fats: 10 },
    calories: 350,
  },
  {
    name: 'Broccoli paratha',
    image: 'https://th.bing.com/th/id/OIP.K_wztHC3cR3z5Qu95aaxuwHaHa?rs=1&pid=ImgDetMain',
    ingredients: ['Whole wheat flour', 'Broccoli', 'Spices', 'Yogurt'],
    macronutrients: { protein: 10, carbs: 40, fats: 6 },
    calories: 250,
  },
  {
    name: 'Trail mix',
    image: 'https://static1.squarespace.com/static/56f2347b45bf21ad0eba0e48/t/588946bf893fc0fc034ec872/1485391556742/',
    ingredients: ['Raw nuts', 'Raw seeds', 'Dried fruits', 'Spices'],
    macronutrients: { protein: 6, carbs: 30, fats: 15 },
    calories: 250,
  },
  {
    name: 'Sweet Potato and sausages',
    image: 'https://i.pinimg.com/originals/de/39/5f/de395ff0ea68288028f29b234170bbf1.png',
    ingredients: ['Sweet potatoes', 'Sausages', 'Spices', 'Olive oil'],
    macronutrients: { protein: 20, carbs: 40, fats: 15 },
    calories: 350,
  },
  {
    name: 'Soba noodles',
    image: 'https://th.bing.com/th/id/OIP.Ezq9bX-gPDGAtO9vP0zoBgHaKU?w=186&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ['Soba noodles', 'Vegetables', 'Soy sauce', 'Garlic'],
    macronutrients: { protein: 8, carbs: 50, fats: 7 },
    calories: 300,
  },
  {
    name: 'Chickpea wrap',
    image: 'https://th.bing.com/th/id/OIP.Bev3Ey1jdVGn2wghL4pxhAHaJ_?w=183&h=247&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ['Chickpeas', 'Wrap bread', 'Lettuce', 'Yogurt sauce'],
    macronutrients: { protein: 12, carbs: 40, fats: 8 },
    calories: 250,
  },
  {
    name: 'Sprouts salad',
    image: 'https://www.whiskaffair.com/wp-content/uploads/2020/04/Sprouts-Salad-1.jpg',
    ingredients: ['Sprouts', 'Tomatoes', 'Cucumbers', 'Lemon juice'],
    macronutrients: { protein: 10, carbs: 15, fats: 5 },
    calories: 150,
  },
];

const RecipeCard = ({ recipe }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="#E6E6FA">
    <Stack spacing={4} align="center">
      <Image borderRadius="md" src={recipe.image} alt={recipe.name} boxSize="150px" objectFit="cover" />
      <Heading as="h3" size="lg">{recipe.name}</Heading>
      <Text fontSize="md" fontWeight="bold">Ingredients:</Text>
      <Stack spacing={2} align="start">
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} fontSize="sm">{ingredient}</Text>
        ))}
      </Stack>
      <Divider />
      <Text fontSize="md" fontWeight="bold">Macronutrients:</Text>
      <Text fontSize="sm">Protein: {recipe.macronutrients.protein} g</Text>
      <Text fontSize="sm">Carbohydrates: {recipe.macronutrients.carbs} g</Text>
      <Text fontSize="sm">Fats: {recipe.macronutrients.fats} g</Text>
      <Divider />
      <Text fontSize="md" color="gray.600">Calories: {recipe.calories} kcal</Text>
    </Stack>
  </Box>
);

const RecipePage = () => (
  <ChakraProvider>
    <Box p={8}>
      <Heading mb={6}>Recipes for healthy diet</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </SimpleGrid>
    </Box>
  </ChakraProvider>
);

export default RecipePage;