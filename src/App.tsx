import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<p className="text-center">Page not found</p>} />
    </Routes>
  );
}

export default App;
