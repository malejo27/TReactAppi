import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderButtons from './HeaderButtons';

const Header = ({ isLoggedIn, login, setIsAdmin}) => {
    return (
       <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">TReact</Navbar.Brand>
                <Nav className="justify-content-end">
                    <HeaderButtons
                        isLoggedIn={isLoggedIn}
                        setLogin={login}
                        setIsAdmin={setIsAdmin}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;