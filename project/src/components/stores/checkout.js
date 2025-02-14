import React, { useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaGooglePay, FaAmazonPay, FaUniversity } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/si';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [savedCards, setSavedCards] = useState([
    { id: 1, type: 'Visa', last4: '4242' },
    { id: 2, type: 'MasterCard', last4: '6789' },
  ]);
  const [newCard, setNewCard] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const toast = useToast();

  const handleAddCard = () => {
    if (newCard.cardNumber && newCard.expiryDate && newCard.cvv) {
      setSavedCards([...savedCards, { id: savedCards.length + 1, type: 'New Card', last4: newCard.cardNumber.slice(-4) }]);
      setNewCard({ cardNumber: '', expiryDate: '', cvv: '' });
      toast({ title: 'Card Added', description: 'Your new card has been saved!', status: 'success', duration: 2000 });
    } else {
      toast({ title: 'Error', description: 'Please enter valid card details.', status: 'error', duration: 2000 });
    }
  };

  const handlePayment = () => {
    if (paymentMethod === 'upi' && !upiId) {
      toast({ title: 'Error', description: 'Please enter a valid UPI ID.', status: 'error', duration: 2000 });
      return;
    }
    toast({ title: 'Payment Successful', description: 'Your payment has been processed.', status: 'success', duration: 3000 });
  };

  return (
    <Box p={8} maxW="600px" mx="auto">
      <Heading mb={6}>Select Your Payment Method</Heading>
      <Stack spacing={4}>
        <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
          <VStack align="start">
            {savedCards.map((card) => (
              <Radio key={card.id} value={`card-${card.id}`}>
                <Icon as={FaCcVisa} w={5} h={5} /> {card.type} •••• {card.last4}
              </Radio>
            ))}
            <Radio value="paypal">
              <Icon as={FaPaypal} w={5} h={5} /> PayPal
            </Radio>
            <Radio value="googlePay">
              <Icon as={FaGooglePay} w={5} h={5} /> Google Pay
            </Radio>
            <Radio value="phonePe">
              <Icon as={SiPhonepe} w={5} h={5} /> PhonePe
            </Radio>
            <Radio value="amazonPay">
              <Icon as={FaAmazonPay} w={5} h={5} /> Amazon Pay
            </Radio>
            <Radio value="upi">
              <Icon as={FaUniversity} w={5} h={5} /> UPI Payment
            </Radio>
          </VStack>
        </RadioGroup>

        {paymentMethod === 'upi' && (
          <FormControl>
            <FormLabel>Enter UPI ID</FormLabel>
            <Input type="text" placeholder="yourname@upi" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
          </FormControl>
        )}

        {paymentMethod.startsWith('card') && (
          <FormControl>
            <FormLabel>Enter CVV</FormLabel>
            <Input type="password" placeholder="123" maxW="100px" />
          </FormControl>
        )}

        <Button colorScheme="teal" size="lg" onClick={handlePayment}>
          Pay Now
        </Button>

        <Heading size="md" mt={6}>Add a New Card</Heading>
        <Stack spacing={3}>
          <Input placeholder="Card Number" value={newCard.cardNumber} onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })} />
          <Input placeholder="Expiry Date (MM/YY)" value={newCard.expiryDate} onChange={(e) => setNewCard({ ...newCard, expiryDate: e.target.value })} />
          <Input placeholder="CVV" type="password" value={newCard.cvv} onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })} />
          <Button onClick={handleAddCard} colorScheme="blue">Add Card</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PaymentPage;
