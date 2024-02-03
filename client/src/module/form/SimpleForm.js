import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleForm = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [chatBotSteps, setChatBotSteps] = useState([
    {
      id: '1',
      message: 'Write a sentence in English that you would like to translate!',
      trigger: 'translate',
    },
    {
      id: 'translate',
      user: true,
      validator: (value) => {
        handleProcess(value);
        return true;
      },
      trigger: 'showTranslation',
    },
    {
      id: 'showTranslation',
      message: 'Initial message', // This will be updated with the translated text
      trigger: '4'
    },
    {
        id: '4',
        message: 'Write a sentence in English that you would like to translate!',
        end: true
      },
  ]);

  useEffect(() => {
    if (translatedText) {
      updateChatbotStep('showTranslation', translatedText);
    }
  }, [translatedText]);

  useEffect(() => {
    console.log("German_text", translatedText);
  }, [translatedText]);

  

  
  const handleProcess = async (englishText) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/translate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          english: englishText,
        }),
      });

      const result = await response.json();
      console.log(result);
      setTranslatedText(result.german_text);
      // Update the chatbot step with the translated text
      updateChatbotStep('showTranslation', result.german_text);

      
    } catch (error) {
      console.error('Error processing translation:', error);
    }
  };

  const updateChatbotStep = (stepId, newMessage) => {
    const updatedSteps = chatBotSteps.map((step) => {
      if (step.id === stepId) {
        return { ...step, message: newMessage };
      }
      return step;
    });
    console.log("Inside the updateChatbotStep", translatedText)

    // Update the chatbot steps
    console.log(updatedSteps)
    setChatBotSteps(updatedSteps);
  };

  const config = {
    width: "700px",
    height: "700px",
  };

//   const chatBotSteps = [
//     {
//       id: '1',
//       message: 'Write a sentence in English that you would like to translate!',
//       trigger: 'translate',
//     },
//     {
//       id: 'translate',
//       user: true,
//       validator: (value) => {
//         handleProcess(value);
//         return true;
//       },
//       trigger: 'showTranslation',
//     },
//     {
//       id: 'showTranslation',
//       message: 'Initial message', // This will be updated with the translated text
//       end: true,
//     },
//   ];

  return (
    <ChatBot
      steps={chatBotSteps}
      {...config}
      
    />
  );
};

export default SimpleForm;
