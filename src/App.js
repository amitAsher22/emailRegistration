import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registionandlogin from "./components/Registionandlogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registionandlogin />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
