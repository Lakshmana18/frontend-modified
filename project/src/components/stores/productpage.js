// import React, { useState } from 'react';
// import { Box, Image, Text, Button, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = () => {
//   const navigate = useNavigate();

//   const BuyNow = (productName) => {
//     console.log()
//     navigate('/checkout');
//   };

  // const products = [
  //   { name: 'Lentils', price: 2, imageUrl: 'https://arrowheadmills.com/wp-content/uploads/2022/10/red-lentils-1-1024x684.jpg' },
  //   { name: 'Spinach', price: 0.3, imageUrl: 'https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?rs=1&pid=ImgDetMain' },
  //   { name: 'Pasta', price: 1.5, imageUrl: 'https://thumbs.dreamstime.com/b/uncooked-penne-pasta-raw-italian-metal-mug-healthy-ingredient-cooking-83800514.jpg' },
  //   { name: 'Dates', price: 2.5, imageUrl: 'https://www.popoptiq.com/wp-content/uploads/2018/08/medjool-dates-081318.jpg' },
  //   { name: 'Almonds', price: 4, imageUrl: 'https://www.aahaarexpert.com/wp-content/uploads/2018/01/almond-1024x1024.jpg' },
  //   { name: 'Walnuts', price: 7.3, imageUrl: 'https://th.bing.com/th/id/OIP.MFmQYY1RmVkgQqXLu7w9lAHaFM?rs=1&pid=ImgDetMain' },
  //   { name: 'Quinoa', price: 1.7, imageUrl: 'https://th.bing.com/th/id/OIP.Moz3NC-aX9vcA-z-yw_BRwHaF8?rs=1&pid=ImgDetMain' },
  //   { name: 'Brown bread', price: 1, imageUrl: 'https://th.bing.com/th/id/OIP.hQZYD0ajKaKOvRcUEpLxjgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  //   { name: 'Oats', price: 1.4, imageUrl: 'https://discovery-assets-production.s3.eu-west-1.amazonaws.com/app/uploads/2022/09/02133657/GettyImages-1331420201.jpg' },
  //   { name: 'Avocados', price: 5, imageUrl: 'https://th.bing.com/th/id/OIP.WHuxmFABVaBIUW86ySl-fwHaGF?rs=1&pid=ImgDetMain' },
  //   { name: 'Broccoli', price: 2, imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg' },
  //   { name: 'Kale', price: 3.8, imageUrl: 'https://www.prensalibre.com/wp-content/uploads/2019/07/shutterstock_192761057.jpg?quality=82&w=1024' },
  //   { name: 'Bell pepper', price: 4, imageUrl: 'https://th.bing.com/th/id/OIP.ZTUIBt1G8bvAW1i0Xmwl8gHaFi?rs=1&pid=ImgDetMain' },
  //   { name: 'Sweet potato', price: 1, imageUrl: 'https://th.bing.com/th/id/OIP.BxzJhOigpCoy2bOiNXHOmQHaE8?rs=1&pid=ImgDetMain' },
  //   { name: 'Cucumber', price: 0.5, imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/06/shutterstock_520879192.jpg?w=1200' },
  //   { name: 'Carrots', price: 0.8, imageUrl: 'https://th.bing.com/th/id/OIP.qe8NEZ2rtRkBWgmfZY6keAHaE8?rs=1&pid=ImgDetMain' },
  //   { name: 'Wheat flour', price: 1.2, imageUrl: 'https://financialtribune.com/sites/default/files/field/image/17january/04-zs-flour_exports_84-ab.jpg' },
  //   { name: 'Green peas', price: 0.6, imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2021/08/23133154/Peas.jpg' },
  //   { name: 'Chick pea', price: 1.5, imageUrl: 'https://th.bing.com/th/id/R.d8ff45c8ab79a2a3bb133529a0941c5d?rik=9XUE%2fUO9HxUkiQ&riu=http%3a%2f%2fwww.medicalnewstoday.com%2fimages%2farticles%2f280%2f280244%2fchickpeas.jpg&ehk=DeUv4S4rZZtuIoyFoQyXnsc7doPtvWrxcvJ8T3oLCXU%3d&risl=&pid=ImgRaw&r=0' },
  //   { name: 'Cashew nuts', price: 8, imageUrl: 'https://thehealthypandas.com/wp-content/uploads/2018/01/Are-cashew-nuts-good-for-you-know-15-health-benefits-of-cashew-nuts.jpg' },
  // ];

//   return (
//     <Box p={8}>
//       <Heading mb={6}>Product Details</Heading>
//       <SimpleGrid columns={4} spacing={8}>
//         {products.map((product, index) => (
//           <Stack key={index} spacing={4} align="center">
//             <Image 
//               src={product.imageUrl} 
//               alt={product.name} 
//               boxSize="200px" 
//               objectFit="cover" 
//             />
//             <Text fontSize="xl">{product.name}</Text>
//             <Text fontSize="md">Price: ${product.price}</Text>
//             <Button onClick={() => BuyNow(product.name)} colorScheme="teal">
//               BUY NOW
//             </Button>
//           </Stack>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default ProductPage;

import React, { useState } from 'react';
import { 
  Box, Image, Text, Button, Heading, Stack, SimpleGrid, IconButton, Badge, useDisclosure, 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, HStack 
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState({});

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.name]) {
        updatedCart[product.name].quantity += 1;
        updatedCart[product.name].totalPrice += product.price;
      } else {
        updatedCart[product.name] = { ...product, quantity: 1, totalPrice: product.price };
      }
      return updatedCart;
    });
  };

  // Function to remove an item completely from the cart
  const removeFromCart = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productName];
      return updatedCart;
    });
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productName].quantity > 1) {
        updatedCart[productName].quantity -= 1;
        updatedCart[productName].totalPrice -= updatedCart[productName].price;
      } else {
        delete updatedCart[productName];
      }
      return updatedCart;
    });
  };

  // Function to calculate the total amount of all items
  const totalAmount = Object.values(cart).reduce((sum, item) => sum + item.totalPrice, 0);

  // Function to navigate to checkout
  const BuyNow = () => {
    navigate('/checkout');
  };

  // Sample product data
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
      {/* Cart Button */}
      <Button position="absolute" top={4} right={4} colorScheme="teal" onClick={onOpen}>
        <FaShoppingCart /> Cart <Badge ml={2} colorScheme="red">{Object.keys(cart).length}</Badge>
      </Button>

      <Heading mb={6}>Product Details</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
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
            <Stack direction="row" spacing={4}>
              <Button onClick={BuyNow} colorScheme="teal">
                BUY NOW
              </Button>
              <IconButton 
                aria-label="Add to cart" 
                icon={<AddIcon />} 
                onClick={() => addToCart(product)} 
                colorScheme="blue"
              />
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>

      {/* Cart Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {Object.keys(cart).length === 0 ? (
                <Text>No items in cart</Text>
              ) : (
                Object.values(cart).map((item, index) => (
                  <HStack key={index} justify="space-between" width="full">
                    <Text>{item.name} (x{item.quantity})</Text>
                    <Text>${item.totalPrice.toFixed(2)}</Text>
                    <HStack>
                      <IconButton 
                        size="sm"
                        icon={<MinusIcon />} 
                        aria-label="Decrease quantity" 
                        onClick={() => decreaseQuantity(item.name)} 
                        colorScheme="yellow"
                      />
                      <IconButton 
                        size="sm"
                        icon={<AddIcon />} 
                        aria-label="Increase quantity" 
                        onClick={() => addToCart(item)} 
                        colorScheme="blue"
                      />
                      <IconButton 
                        size="sm"
                        icon={<CloseIcon />} 
                        aria-label="Remove item" 
                        onClick={() => removeFromCart(item.name)} 
                        colorScheme="red"
                      />
                    </HStack>
                  </HStack>
                ))
              )}
              {totalAmount > 0 && (
                <Button colorScheme="green" width="full" onClick={BuyNow}>
                  Buy Now (${totalAmount.toFixed(2)})
                </Button>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductPage;
