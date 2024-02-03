import React, { useState } from 'react';
import { ChakraProvider, Box, Input, Button, Select, VStack, HStack, Text } from '@chakra-ui/react';


const TranslationApp = () => {
  const [inputText, setInputText] = useState("")
  const [translation, setTranslation] = useState("");
  const [direction, setDirection] = useState('en-de');

  const translateText = async () => {
    console.log("Inside translateText", inputText)
    try {
      if(direction == 'en-de'){
        const response = await fetch('http://127.0.0.1:5000/translate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: inputText,
        }),
      });

      const data = await response.json();
      setTranslation(data.output_text);
      console.log("Inside english to german")
      console.log(translation)

      }
      else{
        const response = await fetch('http://127.0.0.1:5000/translate_german_to_english', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: inputText,
        }),
      });

      const data = await response.json();
      setTranslation(data.output_text);
      console.log("Inside german to english")
      console.log("english translation", translation)
      }

      


      


    } catch (error) {
      console.error('Error processing translation:', error);
    }
  };

  const handleRefresh = () => {
    setInputText('');
    setTranslation('');
  };

  return (
    <ChakraProvider>
      <Box
        position="fixed"
        bottom="4"
        right="4"
        p="4"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        width="400px"
      >
        <VStack spacing="4" align="stretch">
          <Text
            fontSize="xl"   // Set font size to extra-large
            fontWeight="bold" // Make the text bold
            mb="4"           // Add margin-bottom for spacing
            textAlign="center" // Center-align the text
          >
            Need help with Translation? Ask Me
          </Text>
          <Input
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Translation:
            </Text>
            <Text>{translation}</Text>
          </Box>

          <Select
            flex="1"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="en-de">English to German</option>
            <option value="de-en">German to English</option>
          </Select>

          <HStack spacing="2" align="stretch">

            <Button
              colorScheme="teal"
              onClick={translateText}
              flex="1"
              ml="2"
            >
              Translate
            </Button>
            <Button colorScheme="blue" onClick={handleRefresh} flex="1" ml="2">
              Refresh
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default TranslationApp;
