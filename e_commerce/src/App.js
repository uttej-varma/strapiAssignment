// import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Cart from './components/cart/cart';
import Provider from "./components/contextProvider";
import Entrance from './components/Entrance/entrance'
import Feed from './components/feedpage/feed';
// import Provider from "./components/contextProvider"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider>
      <Routes>
      
        <Route path="*" element={<Entrance/>}/>
        <Route path="feed" element={<Feed/>}/>
        <Route path="cart" element={<Cart/>}/>
      
      </Routes>
      
      </Provider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
