import React, { useState } from 'react'; // Import React and useState
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      if (username.trim() === "" || password.trim() === "") {
        alert("Please enter a username and password.");
      } else {
        // Perform login logic
        console.log("Username: " + username);
        console.log("Password: " + password);
      }
    }
  
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  export default Login