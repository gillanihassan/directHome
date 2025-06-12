import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signin from "../auth/signin/Signin";
import DirectHome from "../DirectHome";
// import Register from "../auth/register/Register";
import Auth from "../auth/Auth";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<DirectHome />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Routing;
