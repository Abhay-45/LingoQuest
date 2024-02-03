import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
// import { Notifications } from 'react-push-notification';
// import NotificationComponent from './module/NotificationComponent';
// import { SimpleChatBox } from './module/SimpleChatBox';
// import SimpleForm from './module/form/SimpleForm';
// import Homepage from './components/homepage';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      {/* <Notifications /> */}
      {/* <NotificationComponent /> */}
      {/* <SimpleChatBox /> */}
      {/* <Homepage/> */}
      {/* <SimpleForm /> */}
      <ChakraProvider>
        <Game />
      </ChakraProvider>
    </div>
  );
}

export default App;
