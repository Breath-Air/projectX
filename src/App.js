import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Register from "./pages/Register";

function App() {

  return (
    <>
      
     
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Home exact />
      <Navigation />
    </>
  );
}
export default App;
