import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function NavMenu() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Link to="/" className="nav-link">overview</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-link">contact</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/shop" className="nav-link">shop</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavMenu;
