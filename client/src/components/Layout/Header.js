import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar className="header-nav">
        <Container>
          <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
