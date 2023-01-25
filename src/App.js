import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormList from "./components/FormList";
import { Navbar } from "./components/Navbar";
import { ShopContextProvider } from "./context/ShopContext";
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<FormList />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
