import styled from "styled-components";

export const Header = styled.div`
  background-color: #AAD5E7;
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  /* box-shadow: 0 3px 6px 0 #555; */
`;

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:auto;
  margin-right: auto;
`;

export const AppIcon = styled.img`
  width:36px;
  height:36px;
  margin: 15px;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  background-color: white;
  width:27%;
  margin-left:35%;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 0px 200px 300px 200px;
  opacity: 50%;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
