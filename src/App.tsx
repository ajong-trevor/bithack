import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import FormFile from './Pages/Form';
import Confirmation from './Pages/Confirmation';
import Test from './Pages/test';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/register" element={<FormFile />} />
        <Route path="/registered/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
