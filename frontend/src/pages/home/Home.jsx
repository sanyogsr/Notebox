import React from "react";
import Author from "../../component/Author/Author.jsx";
import RenderPost from "./center/RenderPost.js";
import "./Home.css";
import UploadNote from "../../component/uploadNote/UploadNote";
import Navbar from "../../component/Navbar";
import BuildConversation from "../../component/BuildConversation/BuildConversation";
import Footer from "../../component/footer/Footer";
const Home = () => {
  return (
    <>
      <div style={{ background: "#e2e6e9" }}>
        <Navbar />
      </div>

      <div className="home-container">
        <div className="home-top">
          <UploadNote />
          <Author />
        </div>
        <div className="main">
          <div className="main-center-container">
            <div className="center-container">
              <RenderPost />
            </div>
            <div className="right-container">
              <BuildConversation />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
