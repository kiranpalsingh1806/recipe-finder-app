import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from '@material-ui/core/Button';
import {Header,AppName,SearchBox,SearchIcon,SearchInput,Placeholder} from './components/headerComponent';
import {RecipeContainer,RecipeName,SeeNewTab,SeeMoreText,CoverImage,IngredientsText} from './components/recipeComponent';

const APP_ID = "1b51b56f";
const APP_KEY = "3e14eb6e269f8a1148e2b99a00326437";

const RecipeComponent = (props) => {
const [show, setShow] = useState("");
const { label, image, ingredients, url } = props.recipe;
  return (
    <RecipeContainer>
      <Dialog
        onClose={() => console.log("adsadad")}
        aria-labelledby="simple-dialog-title"
        open={!!show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <RecipeName>{label}</RecipeName>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
          <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
      <IngredientsText onClick={() => setShow(!show)}>
        Ingredients
      </IngredientsText>
      <SeeMoreText onClick={() => window.open(url)}>
        See Complete Recipe
      </SeeMoreText>
    </RecipeContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #AAD5E7;
`;
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 100px;
  justify-content: space-evenly;
`;


const AppComponent = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 1500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          Recipe Finder
        </AppName>
      </Header>
      <SearchBox>
        <SearchIcon src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
        <SearchInput
          placeholder="Enter the name of Dish"
          value={searchQuery}
          onChange={onTextChange}
        />
        <Button variant="contained" color="primary">
        Search
        </Button>
      </SearchBox>
      <Header>
        <AppName>
          Type a dish name to search for its ingredients
        </AppName>
      </Header>
      <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png" />
        )}
      </RecipeListContainer>
    </Container>
  );
};

export default AppComponent;
