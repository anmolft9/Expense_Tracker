import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

function App() {
  const [userForm, setUserForm] = useState([]);
  const addUser = (registerForm) => {
    setUserForm([...userForm, registerForm]);
  };

  // const emailRef=useRef();
  // const passwordRef=useRef();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<Registration addUser={addUser} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
