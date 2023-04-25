import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './component/signIn/SignIn';
import SignUp from './component/signUp/SignUp';
import BucketCreate from './pages/bucket/BucketCreate';
import BallCreate from './pages/ball/BallCreate';
import ListSuggestion from './pages/suggestion/ListSuggestion';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<SignIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route path='/bucket' element= {<BucketCreate/>}/>
      <Route path='/ball' element= {<BallCreate/>}/>
      <Route path='/suggestion' element= {<ListSuggestion/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
