import React, { useContext } from "react";
import HomePost from "./Homepost.js";
import styled from "styled-components";
import axios from "axios";
import { Search, ArrowForward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { search } from "../../../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";
import { mobile } from "../../../responsive";
import CircularLoader from "../../../component/CircularLoader";
import { publicRequest } from "../../../requestMethods";
const Container = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 3vh;
  ${mobile({ marginTop: "1vh" })}
`;
const SearchContainer = styled.form`
  border: 2px solid #8aa3fa;
  display: flex;
  width: 100%;
  border-radius: 15px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 20px;

  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 95%;
  border-radius: 15px;
  height: 40px;
  font-size: 16px;
  ${mobile({ height: "30px" })}
  padding: 5px;
`;
const SearchButton = styled.button`
  border: none;
  outline: none;
  color: #8da6ff;
  cursor: pointer;
  background: none;
`;
const ShowmoreButton = styled.button`
  margin: auto;
  border: 2px dotted #8ba3fb;
  outline: none;
  background-color: white;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;

  padding: 2vh;
  padding-left: 3vh;
  padding-right: 3vh;
  cursor: pointer;
  color: #8ba3fb;
  border-radius: 5px;
  &:hover {
    background-color: #8ba3fb;
    color: #ffffff;
  }
`;

const RenderPost = () => {
  const { currentUser: user, searchedValue } = useSelector(
    (state) => state.user
  );
  const [notes, setnotes] = useState([]);
  const [issearching, setissearching] = useState(false);
  const [postcount, setpostcount] = useState(5);
  const [searchedItem, setsearchedItem] = useState(searchedValue);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchallnotes = async () => {
      setissearching(true);
      if (!searchedValue) {
        const res = await publicRequest.get(`notes/?count=${postcount}`);
        setnotes(
          res.data.sort((n1, n2) => {
            return new Date(n2.createdAt) - new Date(n1.createdAt);
          })
        );
      } else {
        const res = await publicRequest.get("notes/findnotes/" + searchedItem);
        setnotes(res.data);
      }
      setissearching(false);
    };
    fetchallnotes();
  }, [user._id, searchedValue, postcount]);

  const searchHandler = async (e) => {
    e.preventDefault();
    dispatch(search(searchedItem));
  };
  useEffect(() => {
    dispatch(search(null));
  }, []);
  console.log(postcount);
  if (issearching) return <CircularLoader item={"notes"} />;
  return (
    <>
      <Wrapper>
        <SearchContainer onSubmit={searchHandler}>
          <Input
            placeholder="Search notes..."
            onChange={(e) => setsearchedItem(e.target.value)}
          />
          <SearchButton type="submit">
            <Search style={{ color: "gray", fontSize: 30 }} />
          </SearchButton>
        </SearchContainer>
      </Wrapper>
      {notes?.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Not Found</h3>
      ) : (
        notes.map((p, i) => <HomePost x={p} key={i} />)
      )}
      <ShowmoreButton
        onClick={() => {
          setpostcount(postcount + 5);
        }}
      >
        Show More <ArrowForward />
      </ShowmoreButton>
    </>
  );
};

export default RenderPost;
