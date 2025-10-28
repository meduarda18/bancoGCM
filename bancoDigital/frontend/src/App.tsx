import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./app/welcome/page";
import { Login } from "./app/auth/login/page";
import { Home } from "./app/home/page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;