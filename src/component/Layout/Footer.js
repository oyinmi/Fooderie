/* jshint esversion: 6 */

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle ">
                <div className="container">
                    <div className="row">
                    
                        {/* column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>FOODI3</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/returnPolicy">Return Policy</a>
                                </li>
                                <li>
                                    <a href="/faqs">FAQs</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        {/* column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>NEWSLETTER</h5>
                            <p>Subscribe to recieve updates, access to exclusive deals, and more.</p>
                            <form>
                                <input className="pa2 ba b--yellow bg-yellow pt2 pb2 pr6" type="email" placeholder="Enter your email address" required />
                            </form>
                            <br></br>
                            <div className="col-sm-12 my-auto">
                                <form >
                                    <input className="pt2 pb2 pr3 pl3 bg-green b--green" type="button" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} FOODERIE App -All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
   .footer-middle {
      background: var(--mainOrange);
      padding-top: 5rem;
      color: var(--mainDark);
  }

  .footer-bottom {
      padding-top: 8rem;
      padding-bottom: 1rem;
  }

  p {
      color: var(--mainDark)
  }

  ul li a  {
      justify-content: inline;
      color: var(--mainDark)
  }

  ul li a:hover {
      color: var(--mainLemon);
  }
`;

