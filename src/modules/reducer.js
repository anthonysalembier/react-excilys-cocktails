import ACTIONS from './action';

const defaultState = {
    currentRecipe: {},
    recipes: []
};

const recipeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.SET_RECIPE_LIST: {
            let recipes = action.payload;

            let newState = {};
            Object.assign(newState, state, {
                recipes: recipes
            });

            return newState;
        }

        case ACTIONS.Types.SET_CURRENT_RECIPE: {
            let currentRecipe = action.payload;

            let newState = {};
            Object.assign(newState, state, {
                currentRecipe: currentRecipe
            });

            return newState;
        }

        case ACTIONS.Types.DELETE_RECIPE: {
            const recipes = state.recipes.filter(
                (e) => {
                    return e.id !== action.payload.id;
                }
            );

            let newState = {};
            Object.assign(newState, state, {
                recipes: recipes
            });

            return newState;
        }

        default:
            return state;
    }

};

export default recipeReducer;