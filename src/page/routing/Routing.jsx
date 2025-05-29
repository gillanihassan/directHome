import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signin from "../auth/signin/Signin";
import DirectHome from "../directHome";
import Register from "../auth/register/Register";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<DirectHome />} />
      </Routes>
    </Router>
  );
}

export default Routing;
