import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { MainHeader } from './components/MainHeader';
import {Login} from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  //Nav Bar component, logo,logotitile routes two buttons
  return (
    <>
      <NavBar/>
      <div className="bg-gray-900 h-[1000px] text-white ">
        {/* Routes */}
      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
            <Route index element={<Home />} />
            <Route path="/notion_app" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<div> No Page Found</div>} />
        </Route>
      </Routes>
      </div>
    </> 
  )
}
export default App;
