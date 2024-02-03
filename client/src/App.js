import './App.css';
import { Notifications } from 'react-push-notification';
import NotificationComponent from './module/NotificationComponent';
// import { SimpleChatBox } from './module/SimpleChatBox';
import SimpleForm from './module/form/SimpleForm';
import Homepage from './components/homepage';
import Api from './components/api';
import Chatbot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      {/* <Notifications />
      <NotificationComponent /> */}
      {/* <SimpleChatBox /> */}
      {/* <Homepage/> */}
      {/* <SimpleForm /> */}
      <Chatbot/>
      {/* <Api></Api> */}

    </div>
  );
}

export default App;