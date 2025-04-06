import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';
import Security from './pages/Security';
import Logout from './pages/Logout';
import Account from './pages/Account';
// import { light } from './components/Assets/Data';

function App() {
  return (
    <div className='app'>
    <BrowserRouter> 
    <Sidebar>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/home" exact element={<Home/>}/>
      <Route path="/" exact element={<Account />}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/setting" exact element={<Setting />}/>
      <Route path="/security" exact element={<Security />}/>
      <Route path="/logout" exact element={<Logout />}/>
    </Routes>
    </Sidebar>
    
    </BrowserRouter>
    </div>
  );
}
// export const lightData =light.data;

export default App;
