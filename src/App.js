import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Authors from "./pages/authors/Authors";
import BookPage from "./pages/book/BookPage";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
