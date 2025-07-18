import { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import './Landing.css';

export default function Landing() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className="landing-hero min-vh-100 d-flex align-items-center text-white">
            <Container>
                <Row className="align-items-center">
                    {/* LEFT COLUMN */}
                    <Col md={4} className="text-center text-md-start mb-5 mb-md-0">
                        <h1 className="display-3 fw-bold">Travel Companion</h1>
                        <p className="lead mb-4">Plan, explore, and relive your adventures.</p>
                        <div>
                            <Button variant="light" className="me-3" onClick={() => setShowLogin(true)}>
                                Login
                            </Button>
                            <Button variant="outline-light" onClick={() => setShowSignup(true)}>
                                Sign Up
                            </Button>
                        </div>
                    </Col>

                    {/* RIGHT COLUMN - DEMO */}
                    <Col md={8}>
                        <h3 className="text-white mb-4">See How It Works</h3>
                        <Row>
                            <Col md={6}>
                                <Card bg="light" text="dark" className="mb-4">
                                    <Card.Body>
                                        <Card.Title>My Europe Trip</Card.Title>
                                        <Card.Text>
                                            ✈️ Paris → Rome → Berlin<br />
                                            📅 May 2025
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card bg="light" text="dark" className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Beach Getaway</Card.Title>
                                        <Card.Text>
                                            🏝️ Bali Adventures<br />
                                            📅 August 2025
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Login Modal */}
            <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="loginEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="loginPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className="mt-4 w-100" type="submit">
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Signup Modal */}
            <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="signupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="signupPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="success" className="mt-4 w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}