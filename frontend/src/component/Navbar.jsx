import React from "react";
import "./Navbar.css";
import LogoutImage from "../assets/logout.png";
import { useState, useEffect } from "react";
import SideMenu from "./Sidemenu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { logout, search } from "../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";

// import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  // const [searchedValue, setsearchedValue] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); // New state variable

  const item = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset === 0);
      setIsScrolled(window.pageYOffset > 0); // Update isScrolled based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    dispatch(search(null));
  }, []);
  const HandleNav = () => {
    console.log(item.current.display);
    if (item.current.display === "flex") {
      item.current.display = "none";
    } else {
      item.current.display = "flex";
    }
  };

  return (
    <div className="Navbar-container">
      <div className="main-container">
        {/* username and profile picture */}

        <div>
          {/* <Link to={"/profile/" + currentUser._id} className="link"> */}
            <div className="user-portion">
              {/* <div className="image">    */}

              {/* <img
                alt="user Immage"
                src={
                  currentUser && currentUser.profilePicture
                    ? currentUser.profilePicture
                    : ""
                }
                className="image"
              /> */}
              <Link to={"/"} className="link">
                <h2>NoteBox</h2>
              </Link>

              </div>
              {/* <div className="username">{currentUser.username}</div>
            </div> */}
          {/* </Link> */}
        </div>
        {/* Navbar Links */}

        <div>
          <ul className="nav-list">
            <Link to={`/`} className="link">
              <li className="nav-list-item">Home</li>
            </Link>
            <Link
              to={currentUser ? `/profile/${currentUser._id}` : `/`}
              className="link"
            >
              <li className="nav-list-item">Profile</li>
            </Link>
            <Link to={`/searchuser`} className="link">
              <li className="nav-list-item">Chat</li>
            </Link>

            <Link to={`/profile/update`} className="link">
              <li className="nav-list-item">Settings</li>
            </Link>
          </ul>
        </div>

        {/* logout button */}
        <div onClick={logoutHandler}>
          <img
            src={LogoutImage}
            width={"20"}
            height={"20"}
            className="logout-image"
          />
        </div>
      </div>

      {isTop ? (
        isSideMenuOpen ? (
          <FaTimes
            className="menu-icon"
            onClick={() => setIsSideMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="menu-icon"
            onClick={() => setIsSideMenuOpen(true)}
          />
        )
      ) : null}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
