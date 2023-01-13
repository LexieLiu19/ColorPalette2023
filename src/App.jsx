import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TestPage from './components/TestPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
