import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Account from './components/Account/account.jsx'
import Cart from './components/Cart/cart.jsx'
import Wishlist from './components/wishlist/wishlist.jsx'
import Orders from './components/orders/order.jsx'
import Landing from './components/mainPge/mainPage.jsx'
import Items from './components/Products/Items/items.jsx'
import Home from './components/Home/home.jsx'

createRoot(document.getElementById('root')).render(
 <HashRouter>
<Routes>
  <Route path="/" element={<Landing />} />

  <Route  element={<Layout />}>
    <Route path='Home' element={<Home />} />  
    <Route path='products' element={<Items />} />  
    <Route path="login" element={<Account />} />
    <Route path="cart" element={<Cart />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="orders" element={<Orders />} />
  </Route>
</Routes>

 </HashRouter>
)
