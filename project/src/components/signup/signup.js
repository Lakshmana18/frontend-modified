import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from "../axios/api";
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Select,
} from '@chakra-ui/react';

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [athlete, setAthleteType] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setHeight(value);
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setWeight(value);
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAge(value);
    }
  };

  const validateForm = () => {
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Validate that all fields are filled
    if (!name || !email || !mobile || !password || !athlete || !gender || !height || !weight || !age) {
      alert("Please fill in all the fields.");
      return false;
    }

    // Validate password length
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }

    // Validate mobile number (example: length check, can be more specific)
    if (mobile.length < 10 || mobile.length > 15) {
      alert("Please enter a valid mobile number.");
      return false;
    }

    return true;
  };

  const signup = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(api + "/signup", { email, name, mobile, password, athlete, gender, height, weight, age });
      if (response.data.message) {
        alert(response.data.message);
        navigate('/signin');
      } else {
        alert("Signup failed: " + response.data.error);
      }
    } catch (e) {
      console.log(e);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box
      minH="100vh"
      bgImage="url('sports-nutrition.jpg')"  
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxW="lg"
        mx="auto"
        p={8}
        borderWidth={1}
        height="1100px"
        width="500px"
        borderRadius="lg"
        boxShadow="2xl"
        bg="white"
        mt={12}
        position="relative"
        zIndex={1}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -1
        }}
      >
        <Heading as="h2" size="xl" textAlign="center" color="teal.600" mb={6}>
          Create Your Account
        </Heading>
        <Stack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              onChange={(e) => setMobile(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="athleteType" isRequired>
            <FormLabel>Type of Athlete</FormLabel>
            <Select
              placeholder="Select type of athlete"
              onChange={(e) => setAthleteType(e.target.value)}
              focusBorderColor="black"
            >
              <option value="Runner">Runner</option>
              <option value="Long Jump">Long Jump</option>
              <option value="Weightlifter">Weightlifter</option>
              <option value="Swimmer">Swimmer</option>
              <option value="Pole Vault">Pole Vault</option>
              <option value="Archery">Archery</option>
              <option value="Wrestlers">Wrestlers</option>
              <option value="Marathon">Marathon</option>
              <option value="Javelin Throw">Javelin Throw</option>
              <option value="Hurdling">Hurdling</option>
              <option value="Cyclist">Cyclist</option>
            </Select>
          </FormControl>

          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              onChange={(e) => setGender(e.target.value)}
              focusBorderColor="black"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="height" isRequired>
            <FormLabel>Height (in cm)</FormLabel>
            <Input
              type="number"
              placeholder="Enter your height"
              onChange={handleHeightChange}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="weight" isRequired>
            <FormLabel>Weight (in kg)</FormLabel>
            <Input
              type="number"
              placeholder="Enter your weight"
              onChange={handleWeightChange}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              placeholder="Enter your age"
              onChange={handleAgeChange}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="black"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <Button
            onClick={signup}
            colorScheme="teal"
            size="lg"
            width="100%"
            _hover={{ bg: "teal.600" }}
            _active={{ bg: "teal.700", transform: "scale(0.95)" }}
          >
            Sign Up
          </Button>

          <Text textAlign="center" color="gray.500">
            Already have an account?{' '}
            <Link color="teal.500" href="/signin">
              Sign In
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};