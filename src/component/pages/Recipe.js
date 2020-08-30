/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    render() {
        return (
            <div className='container'>
                <header> These are recipes for Banga Soup </header>
                <Link to='/'>
                    <h1> Banga Soup Recipes </h1>
                </Link>
            </div>
        );
    }
}


export default Recipe;