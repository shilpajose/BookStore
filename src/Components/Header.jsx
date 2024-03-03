import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand href="#home" className='text-light'>The-Book-Store</Navbar.Brand></Link>
                    <span className='ms-5 me-5'>Welcome Admin</span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/allbooks'} style={{textDecoration:'none'}}>
                                <Nav.Link href="#home" style={{ color: 'wheat' }}>Books</Nav.Link>
                            </Link>
                            <Link to={'/BookHistory'} style={{textDecoration:'none'}}>
                                <Nav.Link href="#link" style={{ color: 'wheat' }}>BookHistory</Nav.Link>
                            </Link>   
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header