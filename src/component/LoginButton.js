import React, { Component } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return !isAuthenticated && <Button variant="outline-success" onClick={() => loginWithRedirect()} >Log In</Button>;
};

export default LoginButton