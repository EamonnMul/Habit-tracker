import './App.css';
import './Pages/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import LandingPage from './Pages/LandingPage';
import HabitTracker from './components/habit-tracker';
import SignIn from './Pages/SignIn';
import Contex from './Pages/context/contex';
function App() {

  
  return (

    <Contex>
     
      <Routes>
        
        <Route path="/" element={<LandingPage />}/>
        <Route path="/habits" element={<HabitTracker />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/SignIn" element={<SignIn />}/>
        

      </Routes>
    </Contex>
   
  );
}

export default App;
