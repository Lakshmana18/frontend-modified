import React, { useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePayment = async () => {
    try {
      let response;
      if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
        response = await axios.post('/api/pay/credit-card', {
          amount: 100, // Amount in dollars
          currency: 'USD',
          paymentMethodId: 'pm_card_visa', // Test Payment Method ID (you'd use real IDs)
        });
      } else if (paymentMethod === 'paypal') {
        response = await axios.post('/api/pay/paypal', {
          amount: 100, // Amount in dollars
          currency: 'USD',
        });
        window.location.href = response.data.payment.links[1].href; // Redirect to PayPal
      } else if (paymentMethod === 'phonePe') {
        response = await axios.post('/api/pay/phonepe', {
          amount: 100,
          currency: 'INR',
        });
        // Handle PhonePe payment logic here
      } else if (paymentMethod === 'googlePay') {
        response = await axios.post('/api/pay/googlepay', {
          amount: 100,
          currency: 'INR',
        });
        // Handle Google Pay payment logic here
      }

      console.log(response.data);
      alert('Payment successful!');
    } catch (error) {
      console.error(error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Select Your Payment Method</Heading>
      <Stack spacing={4}>
        <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
          <Stack direction="column">
            <Radio value="creditCard">Credit Card</Radio>
            <Radio value="debitCard">Debit Card</Radio>
            <Radio value="phonePe">
              PhonePe
              {/* <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/PhonePe-Logo.svg/512px-PhonePe-Logo.svg.png"
                alt="PhonePe"
                boxSize="30px"
                ml={2}
                display="inline"
              /> */}
            </Radio>
            <Radio value="googlePay">
              Google Pay
              {/* <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Google_Pay_%28GPay%29_Logo.svg/2048px-Google_Pay_%28GPay%29_Logo.svg.png"
                alt="Google Pay"
                boxSize="30px"
                ml={2}
                display="inline"
              /> */}
            </Radio>
            <Radio value="paypal">PayPal</Radio>
          </Stack>
        </RadioGroup>

        {paymentMethod === 'creditCard' || paymentMethod === 'debitCard' ? (
          <Stack spacing={4}>
            <FormControl id="cardNumber">
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
              />
            </FormControl>
            <FormControl id="expiryDate">
              <FormLabel>Expiry Date</FormLabel>
              <Input
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
              />
            </FormControl>
            <FormControl id="cvv">
              <FormLabel>CVV</FormLabel>
              <Input
                type="text"
                placeholder="123"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              />
            </FormControl>
          </Stack>
        ) : null}

        <Button colorScheme="teal" size="lg" onClick={handlePayment}>
          Pay Now
        </Button>
      </Stack>
    </Box>
  );
};

export default PaymentPage;