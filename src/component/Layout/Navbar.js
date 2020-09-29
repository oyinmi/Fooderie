/* jshint esversion: 6 */
 
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';      

class Nbar extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div >
				<Navbar fixed="top" collapseOnSelect expand="md" bg="transparent b" variant="dark">
					<Navbar.Brand className='brand pl4' href="/" style={{ color: '#000000', fontSize: 'x-large' }}>Fooderie</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">

						<Nav className="ml-auto pr4">

							<Nav className="nav-item">
								<Nav.Link href="/menu" style={{ color: '#000000' }}> Menu </Nav.Link>
								<Nav.Link href="/service" style={{ color: '#000000' }}> Service </Nav.Link>
								<Nav.Link href="/blog" style={{ color: '#000000' }}> Blog </Nav.Link>
							</Nav>
								
					    </Nav>
					
				    </Navbar.Collapse>

			    </Navbar>
		    </div>	
	    );
	}
};


export default Nbar;
