import React, {Component} from 'react';

class Instructions extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.instructions.map((instruction, index) => {
                            return <li key={index}>
                                {instruction}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Instructions;