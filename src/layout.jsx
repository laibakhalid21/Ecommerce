import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from './components/footer/footer'

function Layout() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [category, setCategory] = useState("all");    
  return (
    <>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        category={category}
        setCategory={setCategory} 
      />
      <Outlet context={{ searchQuery, category }} />
      <Footer />
    </>
  );
}

export default Layout;
