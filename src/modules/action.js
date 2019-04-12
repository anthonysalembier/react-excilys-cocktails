// types of action
const Types = {
    SET_RECIPE_LIST: 'SET_RECIPE_LIST',
    SET_CURRENT_RECIPE: 'SET_CURRENT_RECIPE',
    DELETE_RECIPE: 'DELETE_RECIPE'
};

const setRecipeList = recipes => ({
    type: Types.SET_RECIPE_LIST,
    payload: recipes
});

const setCurrentRecipe = recipe => ({
    type: Types.SET_CURRENT_RECIPE,
    payload: recipe
});


const deleteRecipe = recipe => ({
    type: Types.DELETE_RECIPE,
    payload: recipe
});

export default {
    Types,
    setRecipeList,
    setCurrentRecipe,
    deleteRecipe
};