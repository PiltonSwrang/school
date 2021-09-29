import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

function NavTab() {
    return (
        <Navbar bg="light" expand="lg" className="shadow">
            <Container >
                <Navbar.Brand className="mx-auto" href="/">Student Classroom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto">
                        <NavDropdown title="Students" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add Student</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">View Students</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Classes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Conduct Class</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">View Classes Taken</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Exams" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Conduct Exam</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Enter Exam Result</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">View Result</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Library" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Subject</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavTab
