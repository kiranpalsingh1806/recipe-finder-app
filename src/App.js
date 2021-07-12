import styled from "styled-components";
import Axios from "axios";
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headerComponent'
import {RecipeContainer,CoverImage,IngredientsText,SeeMoreText,RecipeName} from './components/recipeComponent'
import React, { useEffect, useState } from "react";

const APP_ID = "1b51b56f";
const APP_KEY = "3e14eb6e269f8a1148e2b99a00326437";


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
  const [timeoutId,updateTimeoutId] = useState();
  const [recipeList,updateRecipeList] = useState();

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event)=> {
      clearTimeout(timeoutId);
      const timeout = setTimeout(() =>  fetchRecipe(event.target.value),500);
      updateTimeoutId(timeout);
  };

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
        <SearchInput
          placeholder="Search Recipe Here"
          onChange={onTextChange}
          />
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
