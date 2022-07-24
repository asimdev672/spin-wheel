import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import ProductList from './components/product/ProductList';
import Wheel from './components/wheel/Wheel';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>

  
    <Routes>
    
        <Route exact path="/" element={ <Wheel/>} />
        <Route exact path="/product/:id" element={<ProductList/>} />
      </Routes>

   </>
  );
}

export default App;
