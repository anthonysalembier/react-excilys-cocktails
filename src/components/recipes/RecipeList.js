import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MOCK } from '../../Mock';
import ACTIONS from '../../modules/action';
import './RecipeList.scss';
import RecipeOverview from './RecipeOverview';


const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
};

const mapDispatchToProps = dispatch => ({
    setRecipeList: recipes => dispatch(ACTIONS.setRecipeList(recipes))
});


class ConnectedRecipeList extends Component {

    componentDidMount() {
        this.props.setRecipeList(MOCK);
    }

    render() {
        const recipes = this.props.recipes.map((recipe) => {
            return <RecipeOverview
                recipe={recipe}
                key={recipe.id}
            />;
        });

        return (
            <section className='recipes'>
                {recipes}
            </section>
        );
    }
}


const RecipeList = connect(mapStateToProps, mapDispatchToProps) (ConnectedRecipeList);

export default RecipeList