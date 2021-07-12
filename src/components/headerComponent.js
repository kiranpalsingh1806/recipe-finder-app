import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: black;
  display:flex;
  /* justify-content:space-between; */
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
`;



export const AppNameComponent = styled.div`
    display:flex;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
`;

export const AppIcon = styled.img`
  width:36px;
  height:36px;
  margin: 15px;
`

export const SearchComponent = styled.div`
   display: flex;
   flex-direction: flow;
   padding: 15px;
   margin-top:10px;
   border-radius: 6px;
   margin-left:41%;
   margin-right:59%;
`;

export const SearchIcon = styled.img`
    width:36px;
    height:36px;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left:15px;
  font-size: 16px;
  font-weight: bold;
`
