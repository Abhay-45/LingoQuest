import './App.css';
import { Notifications } from 'react-push-notification';
import NotificationComponent from './module/NotificationComponent';
// import { SimpleChatBox } from './module/SimpleChatBox';
import SimpleForm from './module/form/SimpleForm';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
      {/* <Notifications />
      <NotificationComponent /> */}
      {/* <SimpleChatBox /> */}
      {/* <Homepage/> */}
      <SimpleForm />
    </div>
  );
}

export default App;