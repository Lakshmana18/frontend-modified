import React, { useState } from 'react';
import { Box, Image, Text, Button, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const BuyNow = (productName) => {
    console.log()
    navigate('/checkout');
  };

  const products = [
    { name: 'Lentils', price: 2, imageUrl: 'https://arrowheadmills.com/wp-content/uploads/2022/10/red-lentils-1-1024x684.jpg' },
    { name: 'Spinach', price: 0.3, imageUrl: 'https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?rs=1&pid=ImgDetMain' },
    { name: 'Pasta', price: 1.5, imageUrl: 'https://thumbs.dreamstime.com/b/uncooked-penne-pasta-raw-italian-metal-mug-healthy-ingredient-cooking-83800514.jpg' },
    { name: 'Dates', price: 2.5, imageUrl: 'https://www.popoptiq.com/wp-content/uploads/2018/08/medjool-dates-081318.jpg' },
    { name: 'Almonds', price: 4, imageUrl: 'https://www.aahaarexpert.com/wp-content/uploads/2018/01/almond-1024x1024.jpg' },
    { name: 'Walnuts', price: 7.3, imageUrl: 'https://th.bing.com/th/id/OIP.MFmQYY1RmVkgQqXLu7w9lAHaFM?rs=1&pid=ImgDetMain' },
    { name: 'Quinoa', price: 1.7, imageUrl: 'https://th.bing.com/th/id/OIP.Moz3NC-aX9vcA-z-yw_BRwHaF8?rs=1&pid=ImgDetMain' },
    { name: 'Brown bread', price: 1, imageUrl: 'https://th.bing.com/th/id/OIP.hQZYD0ajKaKOvRcUEpLxjgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Oats', price: 1.4, imageUrl: 'https://discovery-assets-production.s3.eu-west-1.amazonaws.com/app/uploads/2022/09/02133657/GettyImages-1331420201.jpg' },
    { name: 'Avocados', price: 5, imageUrl: 'https://th.bing.com/th/id/OIP.WHuxmFABVaBIUW86ySl-fwHaGF?rs=1&pid=ImgDetMain' },
    { name: 'Broccoli', price: 2, imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg' },
    { name: 'Kale', price: 3.8, imageUrl: 'https://www.prensalibre.com/wp-content/uploads/2019/07/shutterstock_192761057.jpg?quality=82&w=1024' },
    { name: 'Bell pepper', price: 4, imageUrl: 'https://th.bing.com/th/id/OIP.ZTUIBt1G8bvAW1i0Xmwl8gHaFi?rs=1&pid=ImgDetMain' },
    { name: 'Sweet potato', price: 1, imageUrl: 'https://th.bing.com/th/id/OIP.BxzJhOigpCoy2bOiNXHOmQHaE8?rs=1&pid=ImgDetMain' },
    { name: 'Cucumber', price: 0.5, imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/06/shutterstock_520879192.jpg?w=1200' },
    { name: 'Carrots', price: 0.8, imageUrl: 'https://th.bing.com/th/id/OIP.qe8NEZ2rtRkBWgmfZY6keAHaE8?rs=1&pid=ImgDetMain' },
    { name: 'Wheat flour', price: 1.2, imageUrl: 'https://financialtribune.com/sites/default/files/field/image/17january/04-zs-flour_exports_84-ab.jpg' },
    { name: 'Green peas', price: 0.6, imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2021/08/23133154/Peas.jpg' },
    { name: 'Chick pea', price: 1.5, imageUrl: 'https://th.bing.com/th/id/R.d8ff45c8ab79a2a3bb133529a0941c5d?rik=9XUE%2fUO9HxUkiQ&riu=http%3a%2f%2fwww.medicalnewstoday.com%2fimages%2farticles%2f280%2f280244%2fchickpeas.jpg&ehk=DeUv4S4rZZtuIoyFoQyXnsc7doPtvWrxcvJ8T3oLCXU%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Cashew nuts', price: 8, imageUrl: 'https://thehealthypandas.com/wp-content/uploads/2018/01/Are-cashew-nuts-good-for-you-know-15-health-benefits-of-cashew-nuts.jpg' },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Product Details</Heading>
      <SimpleGrid columns={4} spacing={8}>
        {products.map((product, index) => (
          <Stack key={index} spacing={4} align="center">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              boxSize="200px" 
              objectFit="cover" 
            />
            <Text fontSize="xl">{product.name}</Text>
            <Text fontSize="md">Price: ${product.price}</Text>
            <Button onClick={() => BuyNow(product.name)} colorScheme="teal">
              BUY NOW
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductPage;