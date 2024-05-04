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
          <Button
            onClick={handleClick}

            // disabled={isFetching}
          >
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
