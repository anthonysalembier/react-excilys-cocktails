import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import RecipeDetails from './components/recipes/RecipeDetails';
import RecipeEdition from './components/recipes/RecipeEdition';
import RecipeList from './components/recipes/RecipeList';
import configureStore from './modules/storage';

const store = configureStore({
    currentRecipe: null,
    recipes: []
});

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header/>

                        <section className='page'>
                            <Switch>
                                <Route
                                    path='/'
                                    exact
                                    component={RecipeList}
                                />

                                <Route
                                    path='/recipe-details/:id'
                                    exact
                                    component={RecipeDetails}
                                />

                                <Route
                                    path='/recipe-edition'
                                    exact
                                    component={RecipeEdition}
                                />
                            </Switch>
                        </section>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
