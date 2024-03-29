import React, { useState, useEffect } from "react";
import { AboutContent, Wrapper } from "./style"
import styled from 'styled-components';
import axios from 'axios';
import Applyform from "./Applyform";

const Login = () => {

    const [spostiRegister, setspostiRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [spostiLogin, setspostiLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [submittingRegister, setSubmittingRegister] = useState(false);
    const [submittingLogin, setSubmittingLogin] = useState(false);
    const [continueWithoutLoggingIn, setContinueWithoutLoggingIn] = useState(false);
    const [registerError, setregisterError] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [imageURL, setImageUrl] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
            // Tällä isAdmin pysyy true vaikka refresh
            const isAdminStored = sessionStorage.getItem('isAdmin');
            if (isAdminStored === 'true') {
                setIsAdmin(true);
            }
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    }, [isAdmin]);

    useEffect(() => {
        axios.get('https://13.51.198.237:5001/image')
            .then(response => {
                setImageUrl(response.data.imageURL);
            })
            .catch(error => {
                console.error('Error fetching image URL:', error);
            });
    }, []);

    const spostiRegisterHandler = (event) => {
        setspostiRegister(event.target.value);
    };

    const PasswordRegisterHandler = (event) => {
        setPasswordRegister(event.target.value);
    };

    const nameRegisterHandler = (event) => {
        setNameRegister(event.target.value);
    };

    const spostiLoginHandler = (event) => {
        setspostiLogin(event.target.value);
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

        axios.post('https://13.51.198.237:5001/users', {
            sposti: spostiRegister,
            name: nameRegister,
            password: passwordRegister
        })
        .then(response => {
            console.log('User registered successfully:', response.data);
            setspostiRegister("");
            setPasswordRegister("");
            setNameRegister("");
            setregisterError("");
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                setregisterError(error.response.data.error);
            } else {
                console.error('Error registering user:', error);
                setregisterError('An error occurred while registering the user');
            }
        })
        .finally(() => {
            setSubmittingRegister(false);
        });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setSubmittingLogin(true);

        axios.post('https://13.51.198.237:5001/login', {
            sposti: spostiLogin,
            password: passwordLogin
        })
        .then(response => {
            console.log('User logged in successfully:', response.data);
            // sessionStorage > localStorage btw
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('sposti', response.data.sposti);
            sessionStorage.setItem('name', response.data.name);
            sessionStorage.setItem('id', response.data.id);
            setLoggedIn(true);
            setIsAdmin(response.data.isAdmin);
        })
        .catch(error => {
            console.error('Error logging in:', error);
        })
        .finally(() => {
            setSubmittingLogin(false);
        });
    };

    // https://i.imgur.com/ECdoRDA.jpeg

    return (
        <AboutContent>
            <Content>
                {imageURL && <BannerImage src={imageURL} />}
            </Content>
            <Content>
                {!loggedIn && !continueWithoutLoggingIn ? (
                    <div>
                        <p>Kirjaudu tai jatka kirjautumatta ilmoittautuaksesi tapahtumaan</p>
                        <FormsContainer>
                            <Wrapper>
                                <p>Rekisteröidy</p>
                                <form onSubmit={handleRegisterSubmit}>
                                    <div>
                                    <label>
                                        Sähköposti:
                                        <input type="text" value={spostiRegister} onChange={spostiRegisterHandler} />
                                    </label>
                                    </div>
                                    <br />
                                    <div>
                                    <label>
                                        Etu + sukunimi:
                                        <input type="text" value={nameRegister} onChange={nameRegisterHandler} />
                                    </label>
                                    </div>
                                    <br />
                                    <div>
                                    <label>
                                        Salasana:
                                        <input type="password" value={passwordRegister} onChange={PasswordRegisterHandler} />
                                    </label>
                                    </div>
                                    <br />
                                    <button type="submit" disabled={submittingRegister}>Rekisteröidy</button>
                                </form>
                                {registerError && <p style={{ color: 'red' }}>{registerError}</p>}
                            </Wrapper>
                            <Wrapper>
                                <p>Kirjaudu</p>
                                <form onSubmit={handleLoginSubmit}>
                                    <div>
                                    <label>
                                        Sähköposti:
                                        <input type="text" value={spostiLogin} onChange={spostiLoginHandler} />
                                    </label>
                                    </div>
                                    <br />
                                    <div>
                                    <label>
                                        Salasana:
                                        <input type="password" value={passwordLogin} onChange={PasswordLoginHandler} />
                                    </label>
                                    </div>
                                    <br />
                                    <button type="submit" disabled={submittingLogin}>Kirjaudu</button>
                                </form>
                            </Wrapper>
                        </FormsContainer>
                        <Wrapper>
                        <button onClick={handleButtonClick}>Jatka kirjautumatta</button>
                        </Wrapper>
                    </div>
                ) : (
                    <Applyform continueWithoutLoggingIn={continueWithoutLoggingIn} isAdmin={isAdmin}/>
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

const FormsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        > div {
            margin-bottom: 20px;
        }
    }
`;

export default Login;