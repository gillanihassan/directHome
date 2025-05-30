import { Image, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import navLogo from "../../../assets/images/navbar/navLogo.png";
import globe from "../../../assets/images/navbar/globe.png";
import styles from "./styles.module.css";

function CustomNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0 mt-1">
      <div className="container-xxl">
        <Navbar.Brand href="#">
          <Image src={navLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto d-flex gap-4 " navbarScroll>
            <Nav.Link className={styles.customLinks}>買樓</Nav.Link>
            <Nav.Link className={styles.customLinks}>租屋</Nav.Link>
            <Nav.Link className={styles.customLinks}>新盤 </Nav.Link>
            <Nav.Link className={styles.customLinks}>置業按揭</Nav.Link>
            <Nav.Link className={styles.customLinks}>自助放盤</Nav.Link>
            <Nav.Link className={styles.customLinks}>更多服務</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <NavDropdown
              title={
                <Image
                  src={globe}
                  alt="User"
                  style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                />
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Settings</NavDropdown.Item>
            </NavDropdown>
            <Button className={`${styles.buttonOne}`}>註冊</Button>
            <Button className={`${styles.buttonTwo}`}>登入</Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNav;
