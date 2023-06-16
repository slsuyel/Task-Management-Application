import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
function Header() {
    return (
        <Navbar  expand="lg" className='container w-100 mx-auto'>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" width={'120px'} height={'60px'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '80px' }}
                        navbarScroll
                    >

                        <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/addtask">  Add Task    </NavLink>
                        <NavLink className="fs-5 text-dark mx-2 text-decoration-none" to="/tasklist">  Task List   </NavLink>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;