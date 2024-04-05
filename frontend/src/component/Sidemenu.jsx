import React from "react";
import { FaBackspace } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";

import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";

const SideMenu = ({ isOpen, onClose }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <ul className="menu-list">
        {/* <li className="nav-list-item">Home</li>
        <li className="nav-list-item">Profile</li>
        <li className="nav-list-item">Settings</li>
        <li className="nav-list-item">About Us</li> */}
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
        {/* <Link onClick={logoutHandler} className="link"> */}
          <li onClick={logoutHandler} className="nav-list-item link">Logout</li>
        {/* </Link> */}
      </ul>
    </div>
  );
};

export default SideMenu;
