import React, { useState} from 'react'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Navbar className="navbar" expand="lg" bg="light">
        <Container fluid className="nav-container">
          <div className='nav-menu-icon ms-4'>
            <AiOutlineMenu onClick={showSidebar} />
          </div>
          <div className={!sidebar ? 'nav-menu active mx-auto' : "nav-menu mx-auto"} onClick={showSidebar}>
            <div className='nav-close-icon'>
              <AiOutlineClose onClick={showSidebar} />
            </div>
            <Nav className="nav-items d-flex align-items-center justify-content-center mx-auto">
              <Nav.Link href="#home" className="nav-links mx-2 fs-5 fw-bold text-black">Home</Nav.Link>
              <Nav.Link href="#home" className="nav-links mx-2 fs-5 fw-bold text-black">About</Nav.Link>
              <Nav.Link href="#features" className="nav-links mx-2 fs-5 fw-bold text-black">Features</Nav.Link>
              <Nav.Link href="#features" className="nav-links fs-5 fw-bold text-black"><span className="fs-1 fst-italic d-none d-xxl-block d-xl-block d-lg-block">foodee</span></Nav.Link>
              <Nav.Link href="#menu" className="nav-links fs-5 mx-2 fw-bold text-black">Menu</Nav.Link>
              <Nav.Link href="#events" className="nav-links fs-5 mx-2 fw-bold text-black">Events</Nav.Link>
              <Nav.Link href="#reservation" className="nav-links mx-2 fs-5 fw-bold text-black">Reservation</Nav.Link>
            </Nav>
            </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar