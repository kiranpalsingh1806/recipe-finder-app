import styled from "styled-components";
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headerComponent'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  position:relative;
`;

const RecipeListContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding:30px;
    justify-content: space-evenly;
`

const RecipeContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 3px 10px 0 #aaa;
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
        <SearchInput placeholder="Search Recipe Here"/>
      </SearchComponent>

      <RecipeListContainer>
          <RecipeContainer>
              <img/>
              <span> Matar Paneer</span>
              <span>Ingtedients</span>
              <span>See Complete Recipe</span>
          </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
