/* jshint esversion: 6 */

import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../assets/images/menuImages/breakfast.jpg';
import img2 from '../assets/images/menuImages/lunch.jpg';
import img3 from '../assets/images/menuImages/dinner.jpg';


const Menu = () => {
    return (
        <MenuContainer className="main-menu">
            <div className="menu-middle">
                <div className="container">
                
                    <h1 className="tc underline pb3"> Our Menu </h1>

                    <div className='row '>

                        {/* Column 1 */}
                        <div className="col-md-4 col-sm-12">
                            <Card bg="white" text="white" className="card text-center shadow-5">
                                <div>
                                    <img src={img} alt="Oops" />
                                </div>
                                <blockquote className="blockquote mb-0 card-body">
                                    <Link to='./order' style={{ color: '#000000' }} > 
                                        Breakfast 
                                    </Link>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Something light to get your day started.
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-4 col-sm-12" >
                            <Card bg="white" text="white" className="card text-center shadow-5">
                                <div>
                                    <img src={img2} alt="Oops" />
                                </div>
                                <blockquote className="blockquote mb-0 card-body">
                                    <Link to='./order' style={{ color: '#000000' }} > 
                                        Lunch
                                    </Link>    
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                             Lunch is ready.
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-4 col-sm-12">
                            <Card bg="white" text="white" className="card text-center shadow-5">
                                <div>
                                    <img src={img3} alt="Oops" />
                                </div>      
                                <blockquote className="blockquote mb-0 card-body"> 
                                    <Link to='./order' style={{ color: '#000000' }} > 
                                        Dinner
                                    </Link>    
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Too tired to cook? 
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </MenuContainer> 
    );
}

export default Menu;

const MenuContainer = styled.menu`
    .menu-middle {
        background: var(--mainWhite);
        color: var(--mainDark);
        padding-left: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;    