import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={"../src/components/Imagens/Logo.png"} alt="BillyBrinquedos" width={130} height={100}/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/" style={{padding: '0.5rem'}}>Inicio</Nav.Link>
                    <Nav.Link href="/catálogo" style={{padding: '0.5rem'}}>Catálogo</Nav.Link>
                    <Nav.Link href="/sobre_nos" style={{padding: '0.5rem'}}>Sobre Nós</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
