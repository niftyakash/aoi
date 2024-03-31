import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage/loginPage';
import HomePage from './pages/homePage/homePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login Page*/}
          <Route path='/' element = {<LoginPage />}/>
          {/* Page for taking in details */}
          <Route path='/home' element= {<HomePage />}/> 
          {/* feasibility page*/}
          <Route path='/feasibility' element = {<></>}/>
          {/* kyc page*/}
          <Route path='/kyc' element = {<></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
