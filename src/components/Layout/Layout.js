import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmailSidebar from "../EmailSidebar/EmailSidebar";
import Nav from "../Nav/Nav";
import CursorGlow from "../CursorGlow/CursorGlow";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <a href="#content" className="skip-link">
        Skip to Content
      </a>
      <CursorGlow />
      <Sidebar />
      <EmailSidebar />
      <Nav />
      <main className="layout__main" id="content">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
