import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./Comp/Home";
import Notes from "./Comp/Notes";
import Login from "./Comp/Login";
import Signup from "./Comp/Signup";
import Help from "./Comp/Help";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
