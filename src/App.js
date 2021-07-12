import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
`;

const Header = styled.div`
  color: white;
  background-color: black;
  display:flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppNameComponent = styled.div`

`;
const SearchComponent = styled.div`
   padding: 20px;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
            Recipe Finder
        </AppNameComponent>
      </Header>
      <SearchComponent>
        <img src="/search-icon.svg"/>
      </SearchComponent>
    </Container>
  );
}

export default App;
