import { useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { mobile } from "../../responsive.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e2e6e9;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;
  background-color: #7388d2;
  color: white;
  margin-bottom: 20px;
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

const Error = styled.span`
  color: red;
  ${"" /* width: 100vw; */}
  ${"" /* margin: 20px; */}
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
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
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>

          <LinkText>
            Need an account? <Link to="/register">Sign Up</Link>
          </LinkText>

          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
