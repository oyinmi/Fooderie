/* jshint esversion: 6 */

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog'>
            <h1> Blog </h1>
            <Link to='./recipe'>
                Click Here
            </Link>
        </div>
    );
}


export default Blog;