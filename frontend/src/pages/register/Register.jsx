// import styled from "styled-components";
// import { mobile } from "../../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { register } from "../../redux/apiCalls";
// import { useHistory } from "react-router-dom";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;

//   background: #e2e6e9;

//   background-repeat: no-repeat;
//   background-size: contain;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   ${mobile({ paddingTop: "12vh" })}
// `;
// const TitleNav = styled.h1`
//   font-size: 45px;
//   ${"" /* font-weight: 00;  */}
//   background:#8da6ff;
//   padding:20px;
//     border-radius:20px;
//   color:white;
//   text-align: center;
//   margin-bottom: 3vh;
//   ${mobile({ textAlign: "center", fontSize: "35px", marginBottom: "1vh" })}
// `;
// const Wrapper = styled.div`
//   width: 60%;
//   height: 60%;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   ${
//     ""
//     /* align-items: start;
//      */
//   }
//   justify-content:start;

//   border-radius: 25px;
//   background-color: #8da6ff;
//   ${mobile({ width: "75%", marginTop: "2vh" })}
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   color: white;
//   font-weight: 300;
//   margin-bottom: 30px;
//   ${mobile({ fontSize: "20px" })}
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
//   ${mobile({ flexDirection: "column", flexWrap: "nowrap" })}
// `;

// const Input = styled.input`
//   flex: 1;
//   border-radius: 15px;
//   margin:0 10px 40px 0;
//   border: 1px solid white;
//   min-width: 40%;

//   padding: 10px;
//   color: gray;
//   ${mobile({ border: "1px solid brown" })}
//   &:focus {
//     outline: none;
//   }
// `;

// const Agreement = styled.span`
//   font-size: 10px;
//   margin-bottom: 20px;
//   margin-top: 5px;
// `;

// const Button = styled.button`
//   width: 40%;
//   display: block;
//   border: none;
//   padding: 15px 20px;
//   background-color: #3967bc;
//   color: white;
//   cursor: pointer;
//   &:disabled {
//     background-color: #223f74;
//     cursor: not-allowed;
//   }
// `;
// const LinkTag = styled.a`
//   margin-top: 20px;
//   font-size: 12px;
//   display: block;
//   text-decoration: none;
// `;
// const Error = styled.span`
//   color: red;
// `;

// const Register = () => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   if (password !== confirmpassword) {
//   //     alert("Passwords do not match");
//   //     return;
//   //   }
//   //   register(dispatch, { firstname, lastname, username, email, password });
//   // };
//   const handleClick = (e) => {
//     e.preventDefault();
//     password === confirmpassword
//       ? register(dispatch, {
//           firstname,
//           lastname,
//           username,
//           email,
//           password,
//         })
//       : alert("password is not same");
//   };

//   return (
//     <Container>
//       <TitleNav>NoteSharing</TitleNav>
//       <Wrapper>
//         <Title>CREATE AN ACCOUNT</Title>
//         <Form>
//           <Input
//             placeholder="first name"
//             onChange={(e) => setFirstname(e.target.value)}
//             type="text"
//             required
//           />
//           <Input
//             placeholder="last name"
//             onChange={(e) => setLastname(e.target.value)}
//             type="text"
//             required
//           />
//           <Input
//             placeholder="username"
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             required
//           />
//           <Input
//             placeholder="email"
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             required
//           />
//           <Input
//             placeholder="password"
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             required
//           />
//           <Input
//             placeholder="confirm password"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             type="password"
//             required
//           />
//           <LinkTag>
//             Already an user?
//             <Link to="/login">
//               <b>LOGIN</b>
//             </Link>
//           </LinkTag>
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button
//             onClick={handleClick}
//             //  disabled={isFetching}
//           >
//             CREATE
//           </Button>
//           {/* <Error>Something went wrong...</Error> */}
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e2e6e9;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ padding: "12vh 0" })}
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8da6ff;
  border-radius: 25px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: none;
  background-color: #f5f5f5;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;

  background-color: #7388d9;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  &:disabled {
    background-color: #7388d2;
    cursor: not-allowed;
  }
`;

const LinkText = styled.span`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: white;
`;

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      register(dispatch, { firstname, lastname, username, email, password });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            required
          />
          <Input
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            required
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <Input
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            required
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Create Account
          </Button>
        </Form>
        <LinkText>
          Already have an account? <Link to="/login">Log In</Link>
        </LinkText>
      </Wrapper>
    </Container>
  );
};

export default Register;
