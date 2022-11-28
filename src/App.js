
import './App.css';
import PaystackIntegation from './components/PaystackIntegation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Genetics from './Genetics';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
        
           <PaystackIntegation />
            <Genetics />
        
        </Route>
      </Routes>
    </Router> 
   
  );
}

export default App;
