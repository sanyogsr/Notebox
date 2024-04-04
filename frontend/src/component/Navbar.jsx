// import { Badge } from "@material-ui/core";
// import { Search, Chat, Menu,AccountCircle,ExitToApp } from "@material-ui/icons";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import styled from "styled-components";
// import { mobile } from "../responsive";
// import { useSelector,useDispatch} from "react-redux";
// import { Link } from "react-router-dom";
// import {logout,search} from "../redux/userRedux";
// import { useRef } from "react";
// import TopNavbar from './TopNavbar/TopNavbar'
// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 10px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   ${mobile({ flex:5 })}
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.form`
//   border: 1px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   ${mobile({ marginLeft:"0px" })}
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   outline: none;
//   ${mobile({ width: "120px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;

// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px",display:"none" })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   ${mobile({ flex: 10, justifyContent: "space-around" })}
// `;

// const MenuItem = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({marginLeft: "15px", marginRight:"5px",flexDirection:"column" })}
// `;
// const Item=styled.p`
//     font-size: 20px;
//     margin-left: "2px";
//     color: #115195;
//     ${mobile({ fontSize: "13px"})}
// `
// const CartItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "15px" ,marginRight:"5px" })}
// `;
// const Button = styled.button`
//   border: none;
//   background: none;
//   outline: none;
//   cursor: pointer;
//   margin-left: 2px;
//   font-size: 20px;
//   color: #185393;
//   ${mobile({fontSize:"13px"})}
// `;
// const SearchButton = styled.button`
//    border: none;
//    outline: none;
//    background-color: black;
// `;
// const TopNavWrapper=styled.div`
//     display: none;
//     ${mobile({ display:"block" })}
// `

// const Navbar = () => {
// //   const quantity = useSelector(state=>state.cart.quantity)
//   const currentUser= useSelector(state=>state.user.currentUser)
//   const [searchedValue,setsearchedValue]=useState(null)
//   const item=useRef();
//   let navigate = useNavigate();
//   const dispatch = useDispatch();
//   const logoutHandler=()=>{
//     dispatch(logout());
//     navigate("/login");
//   }
//   const searchHandler=(e)=>{
//     e.preventDefault();
//     dispatch(search(searchedValue));
//   }
//   useEffect(()=>{
//     dispatch(search(null));
//   },[])
//   const HandleNav =()=>{
//       console.log(item.current.display)
//          if(item.current.display==="flex"){
//             item.current.display="none";
//          }
//          else{
//             item.current.display="flex";
//          }
//   }
//   return (
//     <>
//     <TopNavWrapper>
//      <TopNavbar />
//      </TopNavWrapper>
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>
//           <SearchContainer onSubmit={searchHandler}>
//             <Input placeholder="Search" onChange={(e)=>setsearchedValue(e.target.value)}/>
//             <SearchButton type="submit">
//             <Search style={{ color: "gray", fontSize: 16 }} />
//             </SearchButton >
//           </SearchContainer>
//         </Left>
//         <Center>
//         <Link to="/" style={{textDecoration:"none",color:"black"}}>
//           <Logo>NoteSharing</Logo>
//           </Link>
//         </Center>
//         <Right>

//             {
//              currentUser?
//              <>

//              <Link to={"/profile/"+currentUser._id} style={{textDecoration:"none"}}>
//              <MenuItem>
//              <AccountCircle />
//              <Item>
//              {currentUser.username}
//              </Item>
//              </MenuItem>
//              </Link>

//              <MenuItem>
//              <ExitToApp onClick={logoutHandler}/>
//              <Button onClick={logoutHandler}>Logout</Button>
//              </MenuItem>
//              </>
//              :
//              <>
//               <MenuItem>
//              <Link to="/login" style={{textDecoration:"none",color:"black"}}>
//               SignIn
//              </Link>
//              </MenuItem>
//              <MenuItem>
//              <Link to="/register" style={{textDecoration:"none",color:"black"}}>
//               Register
//              </Link>
//              </MenuItem>
//              </>
//           }

//           <Link to="/searchuser" style={{textDecoration:"none"}}>
//                <MenuItem>
//                <Chat style={{color:"#1b6dc4"}} />
//                <Item>
//                Chat
//                </Item>
//                </MenuItem>
//           </Link>

//         </Right>
//       </Wrapper>
//     </Container>
//     </>
//   );
// };

// export default Navbar;

// // import { Badge } from "@material-ui/core";
// // import {
// //   Search,
// //   Chat,
// //   Menu,
// //   AccountCircle,
// //   ExitToApp,
// //   Home,
// //   Settings,
// // } from "@material-ui/icons";
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import styled from "styled-components";
// // import { mobile } from "../responsive";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link } from "react-router-dom";
// // import { logout, search } from "../redux/userRedux";
// // import { useRef } from "react";
// // import TopNavbar from "./TopNavbar/TopNavbar";

// // const Container = styled.div`
// //   height: 80px;
// //   width: 900px;
// //   background: white;
// //   border-radius: 25px;
// //   z-index: 100;
// //   padding: 20px;
// //   position: relative;
// //   display: flex;
// //   align-items: center;
// //   gap: 50px;
// //   ${mobile({ height: "50px", margin: "5px" })}
// // `;

// // const NavWrapper = styled.div`
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// // `;

// // const NavLinks = styled.div`
// //   display: flex;
// //   align-items: center;
// // `;

// // const NavLink = styled(Link)`
// //   text-decoration: none;
// //   color: black;
// //   margin: 0 10px;
// //   cursor: pointer;
// //   transition: transform 0.3s;
// //   &:hover {
// //     transform: scale(1.1);
// //   }
// // `;

// // const Navbar = () => {
// //   const currentUser = useSelector((state) => state.user.currentUser);
// //   const [searchedValue, setSearchedValue] = useState(null);
// //   const item = useRef();
// //   let navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const logoutHandler = () => {
// //     dispatch(logout());
// //     navigate("/login");
// //   };

// //   const searchHandler = (e) => {
// //     e.preventDefault();
// //     dispatch(search(searchedValue));
// //   };

// //   useEffect(() => {
// //     dispatch(search(null));
// //   }, []);

// //   const handleNav = () => {
// //     if (item.current.display === "flex") {
// //       item.current.display = "none";
// //     } else {
// //       item.current.display = "flex";
// //     }
// //   };

// //   return (
// //     <>
// //       <Container>
// //         <NavWrapper>
// //           <Link to="/" style={{ textDecoration: "none", color: "black" }}>
// //             <h1>NoteBox</h1>
// //           </Link>
// //           <NavLinks>
// //             <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
// //               <Home />
// //             </NavLink>
// //             <NavLink
// //               to="/searchuser"
// //               style={{ textDecoration: "none", color: "black" }}
// //             >
// //               <Chat />
// //             </NavLink>
// //             <NavLink
// //               to={"/profile/" + currentUser._id}
// //               style={{ textDecoration: "none", color: "black" }}
// //             >
// //               <AccountCircle />
// //             </NavLink>
// //             <NavLink
// //               to="/settings"
// //               style={{ textDecoration: "none", color: "black" }}
// //             >
// //               <Settings />
// //             </NavLink>
// //           </NavLinks>
// //           <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
// //             <ExitToApp onClick={logoutHandler} />
// //           </Link>
// //         </NavWrapper>
// //       </Container>
// //     </>
// //   );
// // };

// // export default Navbar;
import React from "react";
import "./Navbar.css";
import LogoutImage from "../assets/logout.png";
import { useState, useEffect } from "react";
// import SideMenu from "./Sidemenu";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { logout, search } from "../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchedValue, setsearchedValue] = useState(null);
  const item = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
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
          <Link to={"/profile/" + currentUser._id} className="link">
            <div className="user-portion">
              {/* <div className="image">    */}

              <img
                alt="user Immage"
                src={
                  currentUser && currentUser.profilePicture
                    ? currentUser.profilePicture
                    : ""
                }
                className="image"
              />

              {/* </div> */}
              <div className="username">{currentUser.username}</div>
            </div>
          </Link>
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
      <FaBars className="menu-icon" onClick={() => setIsSideMenuOpen(true)} />
      {/* <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      /> */}
    </div>
  );
};

export default Navbar;
