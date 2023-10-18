import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Main from './views/Main/Main';
import About from './views/About/About';
import Bouquet from './views/Bouquet/Bouquet';
import OrderList from './views/OrderList/OrderList';
import OrderDetails from './views/OrderDetails/OrderDetails';
import Cart from './views/Cart/Cart';
import './App.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/bouquet/:id" element={<Bouquet />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/orderdetails/:id" element={<OrderDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
