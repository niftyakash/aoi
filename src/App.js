import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage/loginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login Page*/}
          <Route path='/' element = {<LoginPage />}/>
          {/* Page for taking in details */}
          <Route path='/home' element= {<></>}/> 
          {/* feasibility page*/}
          <Route />
          {/* kyc page*/}
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
