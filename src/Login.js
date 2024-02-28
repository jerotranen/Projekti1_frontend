import React, { useState } from "react";
import { Content } from "./style"
import axios from 'axios';

const Login = () => {

    const [usernameRegister, setUsernameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [submittingRegister, setSubmittingRegister] = useState(false);
    const [submittingLogin, setSubmittingLogin] = useState(false);

    const UsernameRegisterHandler = (event) => {
        setUsernameRegister(event.target.value);
    };

    const PasswordRegisterHandler = (event) => {
        setPasswordRegister(event.target.value);
    };

    const UsernameLoginHandler = (event) => {
        setUsernameLogin(event.target.value);
    };

    const PasswordLoginHandler = (event) => {
        setPasswordLogin(event.target.value);
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        setSubmittingRegister(true);

        axios.post('http://localhost:3003/users', {
            username: usernameRegister,
            password: passwordRegister
        })
        .then(response => {
            console.log('User registered successfully:', response.data);
            setUsernameRegister("");
            setPasswordRegister("");
        })
        .catch(error => {
            console.error('Error registering user:', error);
        })
        .finally(() => {
            setSubmittingRegister(false);
        });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setSubmittingLogin(true);

        axios.post('http://localhost:3003/login', {
            username: usernameLogin,
            password: passwordLogin
        })
        .then(response => {
            console.log('User logged in successfully:', response.data);
            // TODO: Testaa tää toiminnallisuus, ei toimi kunnolla refresh jälkeen?
            localStorage.setItem('token', response.data.token);
            setLoggedIn(true);
        })
        .catch(error => {
            console.error('Error logging in:', error);
        })
        .finally(() => {
            setSubmittingLogin(false);
        });
    };

    return (
        <Content>
            <div>
            <div>
                <p>Rekisteröidy</p>
                <form onSubmit={handleRegisterSubmit}>
                    <label>
                        Käyttäjätunnus:
                        <input type="text" value={usernameRegister} onChange={UsernameRegisterHandler} />
                    </label>
                    <br />
                    <label>
                        Salasana:
                        <input type="password" value={passwordRegister} onChange={PasswordRegisterHandler} />
                    </label>
                    <br />
                    <button type="submit" disabled={submittingRegister}>Rekisteröidy</button>
                </form>
            </div>
            <div>
                <p>Kirjaudu</p>
                <form onSubmit={handleLoginSubmit}>
                    <label>
                        Käyttäjätunnus:
                        <input type="text" value={usernameLogin} onChange={UsernameLoginHandler} />
                    </label>
                    <br />
                    <label>
                        Salasana:
                        <input type="password" value={passwordLogin} onChange={PasswordLoginHandler} />
                    </label>
                    <br />
                    <button type="submit" disabled={submittingLogin}>Kirjaudu</button>
                </form>
            </div>
            {loggedIn && <p>Olet kirjautunut sisään!</p>}
        </div>
        </Content>
    );
}

export default Login;