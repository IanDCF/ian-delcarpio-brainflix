import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Navbar from "./components/Navbar/Navbar";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:vidId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/upload/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
