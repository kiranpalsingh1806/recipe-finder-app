import styled from "styled-components";
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headerComponent'
import {RecipeContainer,CoverImage,IngredientsText,SeeMoreText,RecipeName} from './components/recipeComponent'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  position:relative;
`;

export const RecipeListContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap : wrap;
    padding:30px;
    justify-content: space-evenly;
    gap: 20px;
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
          <RecipeContainer>
              <img src="/AppIcon.svg"/>
              <RecipeName> Kulwant's Paneer</RecipeName>
              <IngredientsText>Amanpal's Ingredients</IngredientsText>
              <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
          <RecipeContainer>
              <img src="/AppIcon.svg"/>
              <RecipeName> Kulwant's Paneer</RecipeName>
              <IngredientsText>Amanpal's Ingredients</IngredientsText>
              <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
          <RecipeContainer>
              <img src="/AppIcon.svg"/>
              <RecipeName> Kulwant's Paneer</RecipeName>
              <IngredientsText>Amanpal's Ingredients</IngredientsText>
              <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
          <RecipeContainer>
              <img src="/AppIcon.svg"/>
              <RecipeName> Kulwant's Paneer</RecipeName>
              <IngredientsText>Amanpal's Ingredients</IngredientsText>
              <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
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
