import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  position:relative;
`;

const Header = styled.div`
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



const AppNameComponent = styled.div`
    display:flex;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
`;

const AppIcon = styled.img`
  width:36px;
  height:36px;
  margin: 15px;
`
const SearchComponent = styled.div`
   display: flex;
   flex-direction: flow;
   padding: 15px;
   margin-top:10px;
   border-radius: 6px;
   background-color:;
   margin-left:auto;
   margin-right:auto;
`;

const SearchIcon = styled.img`
    width:36px;
    height:36px;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left:15px;
  font-size: 16px;
  font-weight: bold;
`

function App() {
  return (
    <Container>
      <Header>
            <AppNameComponent>
                <AppIcon src="/AppIcon.svg" />
                Recipe Finder
            </AppNameComponent>
      </Header>

      <SearchComponent>
        <SearchIcon src="/search-icon.svg "/>
        <SearchInput placeholder="Search Recipe"/>
      </SearchComponent>
    </Container>
  );
}

export default App;
