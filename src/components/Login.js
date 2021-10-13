
import React from "react";

import { Container } from 'react-bootstrap'

const AUTH_URL =
    "";

export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
            <a className="btn btn-primary btn-lg" href={AUTH_URL}>
                Login to Play
            </a>

        </Container>
    )
}