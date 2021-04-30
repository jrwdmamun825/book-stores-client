import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container rounded-2 mb-3 p-1 mt-2">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Book_Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/orders">Orders</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/admin">Admin</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/checkout/:">CheckOut</Link>
                        </Nav.Link>
                        {loggedInUser.email ?

                            <button className="btn btn-success"> {loggedInUser.name}</button>

                            :
                            <Nav.Link>
                                <Link to="/login">Login</Link>
                            </Nav.Link>

                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;