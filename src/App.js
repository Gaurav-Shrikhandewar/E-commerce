import './App.css';
import Header from './Components/Header';
// import { BrowserRouter,  Routes, Route } from 'react-router-dom';
// import ShoppingCart from './Components/ShoppingCart';


function App() {
  return (
    <div className="App">
         <Header /> 
        {/* <BrowserRouter>
        <Routes>
           <Route path="/" element={<ShoppingCart />}></Route>
        </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
