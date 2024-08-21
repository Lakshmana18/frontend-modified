import React from 'react';
import { Box, Flex, Link, Image, Heading, Text, Button, useMediaQuery, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 48em)");


  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Flex direction="column" minH="100vh" bgGradient="linear(to-r, teal.400, teal.500)">
      
      <Box
        as="nav"
        width="full"
        bg="white"
        color="black"
        py={4}
        px={6}
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        boxShadow="lg"
      >
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Link href="/" aria-label="Homepage">
            <Image src="logo2.0.webp" alt="Logo" boxSize="70px" borderRadius="12px" />
          </Link>

          <Flex
            as="ul"
            listStyleType="none"
            spacing={4}
            align="center"
            display={{ base: 'none', md: 'flex' }}
            gap={6}
          >
            <Box as="li">
              <Link href="/" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                HOME
              </Link>
            </Box>
            <Box as="li">
              <Link href="/about" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                ABOUT
              </Link>
            </Box>
             <Box as="li" mx={2}>
              <Link href="/homonutri" fontWeight="bold" _hover={{ textDecoration: 'underline',color: '#e60f2e' }}>
                NUTRITION
              </Link>
            </Box>
            {/* <Box as="li" mx={2}>
              <Link  href="/" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                MEAL PLANNING
              </Link>
            </Box>
            <Box as="li" mx={2}>
              <Link  href="/recipe" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                RECIPIES
              </Link>
            </Box> */}
          </Flex>

          <Flex align="center">

          {isMobile && (
              <Box ml={4}>
                <Menu>
                  <MenuButton as={Button} variant="outline" colorScheme="teal" size="sm" borderRadius="full">
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
                    <MenuItem onClick={() => navigate('/about')}>About</MenuItem>
                    <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            )}
        
            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              borderRadius="full"
              onClick={handleSignInClick}
              ml={4}
            >
              Sign In
            </Button>

            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              borderRadius="full"
              onClick={handleSignUpClick}
              ml={4}
            >
              Sign Up
            </Button>

            
          </Flex>
        </Flex>
      </Box>
      <Box
        pt="80px"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
        //bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
        minH="calc(100vh - 80px)"
         backgroundImage="url('/public/main.jpeg')"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          maxW="800px"
          mx="auto"
        >
          <Heading as="h1" size="2xl" mb={6} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
            Sports Nutrition and Meal Planning
          </Heading>
          <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
            We are delighted to have you here! Explore our site to learn more about sports nutrition and meal planning.
          </Text>
    
        </Flex>
      </Box>

      <Box
        as="footer"
        bg="white"
        color="black"
        py={6}
        px={4}
        textAlign="center"
        width="full"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
      >
        <Flex direction="column" align="center">
          <Heading as="h3" size="lg" mb={2} textTransform="uppercase">
            Explore Nutrition & Meal Planning
          </Heading>
          <Text mb={4} fontSize="md">
            Your go-to resource for healthy eating and meal planning.
          </Text>
          <Flex as="ul" listStyleType="none" spacing={4} mb={4} justify="center">
            
            <Box as="li">
              <Link href="/contact" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Contact
              </Link>
            </Box>
            {/* <Box as="li" mx={2}>
              <Link href="/homonutri" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Nutrition
              </Link>
            </Box> */}
          </Flex>
          <Text fontSize="sm" opacity={0.8}>
            © 2024 Wellness Coders. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;