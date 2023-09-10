// components/Header.js
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the search term to the parent component for handling the search
    setSearchTerm("");
  };
  return (
    <header className="header-cl">
      <div className="logo">
        <figure>
          <a className="logo-wrap" href="/">
            <img
              src="https://www.piemultilingual.com/wp-content/themes/piemultilingual/images/piemulti.svg"
              alt="logo"
            />
          </a>
        </figure>
      </div>
      <div>
        <div className="toprod">
          <div>  </div>
          <div className="elet"> <a href="/">All Services</a></div>
          <div className="elet">|</div>
          <div className="elet"><a href="/">Industries We Serve</a></div>
          <div className="elet">|</div>
          <div className="elet"><a href="/">Languages</a></div>
          <div className="elet">|</div>
          <div className="elet"><a href="/">About us</a></div>
          <div className="elet">|</div>
          <div className="elet"><a href="/">Contact Us</a></div>
        </div>

        <form onSubmit={handleSubmit} >
          <div className="txtsearch">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            
          />
          <button type="submit" className="search-button">
            sss
          </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
