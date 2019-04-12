import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RecipeEdition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipe: this.props.recipe || {}
        }
    }

    onNameChanged(event) {
        this.setState({
            recipe: {...this.state.recipe, name: event.target.value}
        });

        this.props.onRecipeChange(this.state.recipe);
    }

    render() {
        return (
            <div className='recipe-edition card'>
                <input
                    type="text"
                    value={this.state.recipe.name}
                    onChange={(event) => this.onNameChanged(event)}
                />

                <Link to='/'>
                    <button>Back</button>
                </Link>
            </div>
        );
    }
}

export default RecipeEdition;