import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      
    </Routes>
  );
};

export default App;
