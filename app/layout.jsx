import '@styles/globals.css'

import Header from "@component/Header";
import Navbar from "@component/Navbar";
import Footer from '@component/Footer';
// fontAwesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


export const metadata = {
  title: "Pie",
  description: "Multiligual Support",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Header />
          <Navbar />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
