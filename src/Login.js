import React, { useState, useEffect } from "react";
import { AboutContent } from "./style"
import styled from 'styled-components';
import axios from 'axios';
import Applyform from "./Applyform";

const Login = () => {

    // TODO: Lisää, että asettaa loggedIn true, mutta ei kirjaudu, jos haluaa jatkaa kirjautumatta

    const [usernameRegister, setUsernameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [submittingRegister, setSubmittingRegister] = useState(false);
    const [submittingLogin, setSubmittingLogin] = useState(false);
    const [continueWithoutLoggingIn, setContinueWithoutLoggingIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

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

    const handleButtonClick = () => {
        setContinueWithoutLoggingIn(true);
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
            // sessionStorage > localStorage btw
            sessionStorage.setItem('token', response.data.token);
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
        <AboutContent>
        <Content><BannerImage src="https://i.imgur.com/ECdoRDA.jpeg"/></Content>
        <Content>
            {!loggedIn && !continueWithoutLoggingIn ? (
                <div>
                    <p>Kirjaudu tai jatka kirjautumatta ilmoittautuaksesi tapahtumaan</p>
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
            <div></div>
                    <button onClick={handleButtonClick}>Jatka kirjautumatta</button>
                </div>
            ) : (
                <Applyform continueWithoutLoggingIn={continueWithoutLoggingIn} />
            )}
        </Content>
        </AboutContent>
    );

}

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.93);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  p {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2); 
  }
  @media (max-width: 768px) {
    max-width: 70%;
    padding: 20px; 
    font-size: 16px;
  }
`;

const BannerImage = styled.img`
width: 100%;
max-width: 300px;
height: auto;
`;

export default Login;