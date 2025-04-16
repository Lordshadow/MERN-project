import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Cart from './components/Cart';
import CategoryMenuPage from './pages/CategoryPage';
import CpuPage from './pages/CpuPage';
import Product from './pages/ProductPage';
import GpuPage from './pages/GpuPage';
import MotherboardPage from './pages/MotherboardPage';
import RamPage from './pages/RamPage';
import StoragePage from './pages/StoragePage';
import PowerSupplyPage from './pages/PowerSupplyPage';
import CasePage from './pages/CasePage';
import CoolingPage from './pages/CoolingPage';
import KeyboardPage from './pages/KeyboardPage';
import MousePage from './pages/MousePage';
import GamepadPage from './pages/GamepadPage';
import MousepadPage from './pages/MousepadPage';
import MicrophonePage from './pages/MicrophonePage';
import HeadphonePage from './pages/HeadphonePage';
import MonitorPage from './pages/MonitorPage';
import LaptopPage from './pages/LaptopPage';
import PrebuiltPCPage from './pages/PrebuiltPCPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/categories" element={<CategoryMenuPage/>} />
        <Route path="/laptop" element={<LaptopPage/>} />
        <Route path="/prebuiltpc" element={<PrebuiltPCPage/>} />
        <Route path="/category/cpu" element={<CpuPage />} />
        <Route path="/category/gpu" element={<GpuPage />} />
        <Route path="/category/motherboard" element={<MotherboardPage />} />
        <Route path="/category/ram" element={<RamPage />} />
        <Route path="/category/storage" element={<StoragePage />} />
        <Route path="/category/powersupply" element={<PowerSupplyPage />} />
        <Route path="/category/case" element={<CasePage />} />
        <Route path="/category/cooling" element={<CoolingPage />} />
        <Route path="/category/keyboard" element={<KeyboardPage />} />
        <Route path="/category/mouse" element={<MousePage />} />
        <Route path="/category/gamepad" element={<GamepadPage />} />
        <Route path="/category/mousepad" element={<MousepadPage/>} />
        <Route path="/category/mic" element={<MicrophonePage />} />
        <Route path="/category/headphone" element={<HeadphonePage />} />
        <Route path="/category/monitors" element={<MonitorPage />} />
        <Route path="/product/:id" element={<Product />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;