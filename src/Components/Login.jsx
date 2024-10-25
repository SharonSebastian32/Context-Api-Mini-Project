import { useState } from "react";
import UserContextProvider from "../Context/UserContextprovider";
import UserContext from "../Context/UserContext";

UserContextProvider;
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = UserContextProvider(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>

      <br />

      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        name=""
        id=""
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Login</button>
      <br />
    </div>
  );
}

export default Login;
