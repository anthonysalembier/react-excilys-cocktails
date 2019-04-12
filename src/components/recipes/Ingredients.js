import React, {Component} from 'react';

class Ingredients extends Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.ingredients.map((ingredient, index) => {
                            return <li key={index}>
                                {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Ingredients;