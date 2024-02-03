import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import {
  Box,
  Button,
  Input,
  Text,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Grid,
  Flex,
  Heading,
  useToast
} from "@chakra-ui/react";

const Game = () => {
  const [questionsAndAnswers] = useState({
    "Car with built in?": ["wifi", "camera", "gps", "tv", "fridge", "speaker"],
    "Why do people?": ["lie", "cheat", "steal", "cry", "fight", "laugh"], 
    "How to make?": ["money", "pancakes", "friends", "pizza", "love", "coffee"],
    "Best recipes for?": ["chicken", "pasta", "cake", "cookies", "salad", "soup"],
    "How to get rid of?": ["acne", "lice", "ants", "stress", "debt", "fleas"],

    // ...other questions and answers
  });
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(4); // Start with 4 guesses
  const {isOpen, onOpen, onClose } = useDisclosure();
  const [showConfetti, setShowConfetti] = useState(false);
  const toast = useToast();

  useEffect(() => {
    loadNewQuestion();
  }, [questionsAndAnswers]);



  useEffect(() => {
    loadNewQuestion();
  }, [questionsAndAnswers]);

  const loadNewQuestion = () => {
    const questions = Object.keys(questionsAndAnswers);
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setUserAnswer("");
    setRevealedAnswers(
      questionsAndAnswers[randomQuestion].reduce((acc, answer) => {
        acc[answer] = false; // All answers are initially not revealed
        return acc;
      }, {})
    );
    setGuesses(5); // Reset guesses
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    if (currentQuestion && questionsAndAnswers[currentQuestion]) {
      const normalizedAnswers = questionsAndAnswers[currentQuestion].map((answer) =>
        answer.toLowerCase()
      );
      if (normalizedAnswers.includes(userAnswer)) {
        if (!revealedAnswers[userAnswer]) {
          // If the answer hasn't been revealed yet, reveal it and increase the score.
          setScore(score + (normalizedAnswers.indexOf(userAnswer) + 1) * 1000);
          setRevealedAnswers({
            ...revealedAnswers,
            [userAnswer]: true, // Reveal the correct answer
          });
        } else {
          // If the answer has already been revealed, do not increase the score.
          alert('You have already guessed this answer!');
        }
        setUserAnswer(""); // Clear the input field regardless if new or already guessed.
      } else {
        if (guesses <= 1) {
          setGuesses(guesses - 1); 
          onOpen(); // Open the modal when out of guesses
        } else {
          setGuesses(guesses - 1); // Decrease the number of guesses left
          setUserAnswer(""); // Clear the input field
        }
      }
      if (score >= 10000 && !showConfetti) {
        setShowConfetti(true);
        toast({
          title: "Congratulations!",
          description: "You have learned German!",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };
  
  const handleTryAgain = () => {
    onClose(); // Close the modal using onClose from useDisclosure
    setScore(0);           // Reset the score
    loadNewQuestion();     // Load a new question
    setShowConfetti(false);
  };
  

  const handleGiveUp = () => {
    setScore(0);
    loadNewQuestion();
  };

  // Ensure we have a current question with answers to map over
  const currentAnswers = currentQuestion ? questionsAndAnswers[currentQuestion] : [];

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={5}
      h="100%"
      w="100%"
      bg="black"
      color="white"
    >
      <Heading as="h1" size="2xl" mb={4} color="purple.300">
        German Feud
      </Heading>
      <Text fontSize="xl" mb={4}>
        Let's learn some German!
      </Text>
      <Box w="100%" maxW="600px">
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="left">
          Q: {currentQuestion}
        </Text>
        <Stack spacing={4} direction="row" justify="center" align="center">
          <Input
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Type your guess here"
            size="lg"
            bg="white"
            color="black"
          />
          <Button colorScheme="purple" onClick={handleSubmit}>Guess</Button>
          <Button colorScheme="red" onClick={handleGiveUp}>Give Up</Button>
        </Stack>
        <br/>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={6}>
          {currentAnswers.map((answer, index) => (
            <Box
              key={index}
              p={2}
              bg={revealedAnswers[answer.toLowerCase()] ? "green.600" : "purple.500"}
              borderRadius="md"
              minH="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              fontWeight="semibold"
            >
              {revealedAnswers[answer.toLowerCase()] ? answer : '' + ((index + 1)*1000)}
            </Box>
          ))}
        </Grid>
        <Flex mb={6} justify="space-between">
          <Box>
            <Text fontSize="xl" mb={2}>
              Score
            </Text>
            <Box
              p={2}
              bg="purple.500"
              borderRadius="md"
              fontWeight="semibold"
            >
              {score}
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" mb={2}>
              Guesses
            </Text>
            <Box
              p={2}
              bg="purple.500"
              borderRadius="md"
              fontWeight="semibold"
            >
              {guesses}
            </Box>
          </Box>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>All guesses are over.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your final score is {score}.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleTryAgain}>
              Try Again
            </Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Game;