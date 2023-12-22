import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>React Blog</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            Blog Listesi
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blogekle">
                            Blog Ekle
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;