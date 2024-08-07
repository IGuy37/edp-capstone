import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';


export default function Navbar_1(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" >
          <img className = "img-responsive" src="/src/assets/logo.png"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',maxWidth:'100%' }}
            navbarScroll
          >
            <Nav.Link href="/employee">Search Employees</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          <Search setEmployee={props.setEmployee}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}