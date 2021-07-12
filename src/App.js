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
    width: 300px;
    box-shadow: 0 3px 10px 0 #aaa;
`

const CoverImage = styled.img`
    height:200px;
`

const RecipeName = styled.span`
    font-size:18px;
    font-weight: bold;
    color: black;
    margin: 10px 0;
`

const IngredientsText = styled.span`
    font-size:18px;
    border: solid 1px green;
    font-weight: bold;
    color: black;
    margin-bottom: 12px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 4px;
    color: green;
    text-align: center;
`

const SeeMoreText = styled(IngredientsText)`
    color:#eb3300;
    border: solid 1px #eb3300
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
              <img src="/AppIcon.svg"/>
              <RecipeName> Kulwant's Paneer</RecipeName>
              <IngredientsText>Amanpal's Ingredients</IngredientsText>
              <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
