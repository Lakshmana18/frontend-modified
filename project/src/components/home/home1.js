import React, { useState } from 'react';
import {
  Box, Flex, Link, Image, Heading, Text, Button, useBreakpointValue, useMediaQuery, Menu, MenuButton, MenuList, MenuItem,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverFooter, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, FormControl, FormLabel, useDisclosure
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const displayMenu = useBreakpointValue({ base: 'none', md: 'flex' });

  const [auth, setAuth] = React.useState(() => JSON.parse(sessionStorage?.auth || '{}'));
  const isAdmin = auth?.isAdmin || false; 

  const { isOpen: isEditModalOpen, onOpen: openEditModal, onClose: closeEditModal } = useDisclosure();
  const { isOpen: isChangePasswordOpen, onOpen: openChangePassword, onClose: closeChangePassword } = useDisclosure();

  const handleGetStartedClick = () => {
    navigate('/nutrition');
  };

  const handleSignOutClick = () => {
    sessionStorage.removeItem('auth');
    navigate('/');
  };
  const handleStoreClick = () => {
    navigate('/product');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedAuth = {
      Email: formData.get('email'),
      Name: formData.get('name'),
      Mobile: formData.get('mobile'),
      Athlete: formData.get('athlete'),
      Gender: formData.get('gender'),
      Height: formData.get('height'),
       Weight: formData.get('weight'),
      Age: formData.get('age'),
      //DOB: formData.get('dob'),
      isAdmin: auth?.isAdmin || false, 
    };
    setAuth(updatedAuth);
    sessionStorage.setItem('auth', JSON.stringify(updatedAuth));
    closeEditModal();
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    closeChangePassword();
  };

  const handleAdminClick = () => {
    navigate('/admin'); 
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
          <Link href="/" aria-label="Home">
            <Image src="logo2.0.webp" alt="Logo" boxSize="70px" borderRadius="12px" />
          </Link>

          <Flex
            as="ul"
            listStyleType="none"
            spacing={4}
            align="center"
            display={displayMenu}
            gap={6}
          >
            <Box as="li">
              <Link href="/home1" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                HOME
              </Link>
            </Box>
            <Box as="li">
              <Link href="/about1" fontWeight="bold" color="black" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                ABOUT
              </Link>
            </Box>
            <Box as="li">
              <Link href="/homonutri" fontWeight="bold" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                NUTRITION
              </Link>
            </Box>
            <Box as="li">
              <Link href="/homomeal" fontWeight="bold" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                MEAL PLANNING
              </Link>
            </Box>
            <Box as="li">
              <Link href="/recipe" fontWeight="bold" _hover={{ textDecoration: 'underline', color: '#e60f2e' }}>
                RECIPES
              </Link>
            </Box>
          </Flex>

          <Flex align="center">
            {isMobile && (
              <Box ml={4}>
                <Menu>
                  <MenuButton as={Button} variant="outline" colorScheme="teal" size="sm" borderRadius="full">
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => navigate('/home1')}>Home</MenuItem>
                    <MenuItem onClick={() => navigate('/about1')}>About</MenuItem>
                    <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
                    <MenuItem onClick={() => navigate('/homomeal')}>MealPlanning</MenuItem>
                    <MenuItem onClick={() => navigate('/homonutri')}>Nutrition</MenuItem>
                    <MenuItem onClick={() => navigate('/recipe')}>Recipes</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            )}
            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              borderRadius="full"
              onClick={handleSignOutClick}
              ml={4}
            >
              Sign Out
            </Button>
            <Box ml={4}>
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="teal" size="sm" borderRadius="full">My Profile</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Email: {auth?.Email || 'No Email'}</PopoverHeader>
                  <PopoverHeader>Name: {auth?.Name || 'No Name'}</PopoverHeader>
                  <PopoverHeader>Phone: {auth?.Mobile || 'No Mobile Number'}</PopoverHeader>
                  <PopoverHeader>Athlete type: {auth?.Athlete || 'No Name'}</PopoverHeader>
                  <PopoverHeader>Gender: {auth?.Gender || 'No Gender'}</PopoverHeader>
                  <PopoverHeader>Age: {auth?.Age || 'No age'}</PopoverHeader>
                  <PopoverFooter>
                    <Button colorScheme="blue" onClick={openEditModal} mr={3}>Edit</Button>
                    <Button colorScheme="blue" onClick={openChangePassword}>Change Password</Button>
                    {/* <Button colorScheme="red" onClick={handleSignOutClick}>Sign Out</Button> */}
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </Box>
            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              borderRadius="full"
              onClick={handleStoreClick}
              ml={4}
            >
              Store
            </Button>
            {isAdmin && (
              <Box ml={4}>
                <Button colorScheme="red" size="sm" borderRadius="full" onClick={handleAdminClick}>Admin</Button>
              </Box>
            )}
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
        minH="calc(100vh - 80px)"
        backgroundImage="url('/hibro.jpeg')"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          maxW="800px"
          mx="auto"
        >
          <Heading as="h1" fontWeight="bolder" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
            Welcome to Our Website
          </Heading>
          <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
            We are delighted to have you here! Explore our site to learn more about us.
          </Text>
          <Button
            onClick={handleGetStartedClick}
            size="lg"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: 'teal.800' }}
            borderRadius="full"
          >
            Get Started
          </Button>
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
          </Flex>
          <Text fontSize="sm" opacity={0.8}>
            © 2024 Wellness Coders. All rights reserved.
          </Text>
        </Flex>
      </Box>

      
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="editProfileForm" onSubmit={handleEditSubmit}>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input name="email" defaultValue={auth?.Email || ''} />
              </FormControl>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input name="name" defaultValue={auth?.Name || ''} />
              </FormControl>
              <FormControl id="mobile" mb={4}>
                <FormLabel>Phone</FormLabel>
                <Input name="mobile" defaultValue={auth?.Mobile || ''} />
              </FormControl>
              <FormControl id="athlete" mb={4}>
                <FormLabel>Athlete Type</FormLabel>
                <Input name="athlete" defaultValue={auth?.Athlete || ''} />
              </FormControl>
              {/* <FormControl id="gender" mb={4}>
                <FormLabel>Gender</FormLabel>
                <Input name="gender" defaultValue={auth?.Gender || ''} />
              </FormControl> */}
              {/* <FormControl id="height" mb={4}>
                <FormLabel>Height</FormLabel>
                <Input name="height" defaultValue={auth?.Height || ''} />
              </FormControl>
              <FormControl id="weight" mb={4}>
                <FormLabel>Weight</FormLabel>
                <Input name="weight" defaultValue={auth?.Weight || ''} />
              </FormControl>
              <FormControl id="age" mb={4}>
                <FormLabel>Age</FormLabel>
                <Input name="age" defaultValue={auth?.Age || ''} />
              </FormControl> */}
              {/* <FormControl id="dob" mb={4}>
                <FormLabel>Date of Birth</FormLabel>
                <Input name="dob" type="date" defaultValue={auth?.DOB || ''} />
              </FormControl> */}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} type="submit" form="editProfileForm">Save</Button>
            <Button variant="ghost" onClick={closeEditModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      
      <Modal isOpen={isChangePasswordOpen} onClose={closeChangePassword}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="changePasswordForm" onSubmit={handleChangePassword}>
              <FormControl id="currentPassword" mb={4}>
                <FormLabel>Current Password</FormLabel>
                <Input name="currentPassword" type="password" required />
              </FormControl>
              <FormControl id="newPassword" mb={4}>
                <FormLabel>New Password</FormLabel>
                <Input name="newPassword" type="password" required />
              </FormControl>
              <FormControl id="confirmPassword" mb={4}>
                <FormLabel>Confirm New Password</FormLabel>
                <Input name="confirmPassword" type="password" required />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} type="submit" form="changePasswordForm">Change Password</Button>
            <Button variant="ghost" onClick={closeChangePassword}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Home1;