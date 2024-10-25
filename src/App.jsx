import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextprovider from "./Context/UserContextprovider";

const App = () => {
  return (
    <UserContextprovider>
      <h1>React Login Form Context API </h1>
      <Login />
       
      <Profile />
    </UserContextprovider>
  );
};

export default App;
