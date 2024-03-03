import './App.css';
import AllProducts from './pages/AllProducts';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (
    <Routes>
      <Route path="/products" element={ <AllProducts/>} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/register" element={ <SignUp/>} />
    </Routes>
  )
}

export default App;
