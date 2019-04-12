import React, {Component} from 'react';
import './Header.scss';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

    navigateToHome = () => {
        console.log('header', this.props);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='header'>
                <h1 onClick={this.navigateToHome} className='home-title'>Excilys Cocktails</h1>

                <div className='links'>
                    <Link to='/recipe-details'>
                        New recipe
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);