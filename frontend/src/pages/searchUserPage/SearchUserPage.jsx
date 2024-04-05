import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { mobile } from "../../responsive";
import BuildConversation from "../../component/BuildConversation/BuildConversation";
import Navbar from "../../component/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${"" /* margin-top: 3vh; */}
  padding: 10px;
  background: #e2e6e9;
`;

const SearchUserContainer = styled.div`
  width: 90%;
`;

const SearchUserPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SearchUserContainer>
          {" "}
          <BuildConversation />
        </SearchUserContainer>
        {/* <BuildConversation /> */}
      </Container>
    </>
  );
};

export default SearchUserPage;
