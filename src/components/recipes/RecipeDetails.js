import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../modules/action';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import './RecipeDetails.scss';


const mapStateToProps = state => ({
    currentRecipe: state.currentRecipe
});

const mapDispatchToProps = dispatch => ({
    setCurrentRecipe: recipe => dispatch(ACTIONS.setCurrentRecipe(recipe))
});


class ConnectedRecipeDetails extends Component {

    constructor(props) {
        super(props);

        if (!this.props.currentRecipe) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            this.props.currentRecipe &&
            <div className='recipe-details card'>
                <h2>{this.props.currentRecipe.name}</h2>

                <div className='recipe--content'>
                    <img
                        src={this.props.currentRecipe.picture}
                        alt={this.props.currentRecipe.picture + '\'s picture'}
                    />

                    <p>
                        {this.props.currentRecipe.description}
                    </p>

                    <Ingredients ingredients={this.props.currentRecipe.ingredients} />

                    <Instructions instructions={this.props.currentRecipe.instructions} />
                </div>
            </div>
        );
    }
}

const RecipeDetails = connect(mapStateToProps, mapDispatchToProps) (ConnectedRecipeDetails);

export default RecipeDetails;