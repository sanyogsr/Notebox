import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { mobile } from "../../responsive";
import BuildConversation from "../../component/BuildConversation/BuildConversation";
import Navbar from "../../component/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${"" /* margin-top: 3vh; */}
  padding: 60px;
  background: #e2e6e9;
`;

const SearchUserPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BuildConversation />
      </Container>
    </>
  );
};

export default SearchUserPage;
