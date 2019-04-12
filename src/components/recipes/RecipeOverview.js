import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ACTIONS from '../../modules/action';
import './RecipeOverview.scss';


const mapStateToProps = state => {
    return ({
        recipes: state.recipes
    })
};

const mapDispatchToProps = dispatch => ({
    deleteRecipe: recipe => dispatch(ACTIONS.deleteRecipe(recipe))
});


class ConnectedRecipeOverview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            descriptionShown: false
        }
    }

    toggleDescription = () => {
        const showDescription = !this.state.descriptionShown;

        this.setState({
            descriptionShown: showDescription
        });
    };

    handleDelete = () => {
        this.props.deleteRecipe(this.props.recipe);
    };

    goToDetails = () => {
        this.props.setCurrentRecipe(this.props.recipe);
    };

    render() {
        return (
            <div className='card recipe-overview-card'>
                <div onClick={this.handleDelete} className='delete--button'>
                    +
                </div>

                <h2>{this.props.recipe.name}</h2>

                <div className='recipe--content'>
                    <img
                        src={this.props.recipe.picture}
                        alt={this.props.recipe.picture + '\'s picture'}
                    />

                    {
                        this.state.descriptionShown
                        &&
                        <p>
                            {this.props.recipe.description}
                        </p>
                    }
                </div>

                <button onClick={this.toggleDescription}>
                    {this.state.descriptionShown ? 'Hide ' : 'Show '}
                    description
                </button>

                <Link to={`/recipe-details/${this.props.recipe.id}`} onClick={this.goToDetails}>
                    <button>Show details</button>
                </Link>

                <Link to='/recipe-edition' onClick={this.goToDetails}>
                    <button>Edit</button>
                </Link>
            </div>
        );
    }

}

const RecipeOverview = connect(mapStateToProps, mapDispatchToProps) (ConnectedRecipeOverview);

export default RecipeOverview;