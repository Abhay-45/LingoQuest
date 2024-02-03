import './App.css';
import { Notifications } from 'react-push-notification';
import NotificationComponent from './module/NotificationComponent';
// import { SimpleChatBox } from './module/SimpleChatBox';
import SimpleForm from './module/form/SimpleForm';
import Homepage from './components/homepage';
import Api from './components/api';
import Chatbot from './components/ChatBot';
import {ChakraProvider} from '@chakra-ui/react';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      {/* <Notifications />
      <NotificationComponent /> */}
      {/* <SimpleChatBox /> */}
      {/* <Homepage/> */}
      {/* <SimpleForm /> */}
      <ChakraProvider>
      <Chatbot/>
      <Game/>
      </ChakraProvider>
      
      {/* <Api></Api> */}

    </div>
  );
}

export default App;