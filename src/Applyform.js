import { React, useState, useEffect} from "react";
import axios from 'axios'
import continueWithoutLoggingIn from './Login'

const Applyform = ({ continueWithoutLoggingIn }) => {

    const [name, setname] = useState("");
    const [sposti, setsposti] = useState("");
    const [submittingForm, setSubmittingForm] = useState(false);
    const [spostilogged, setspostilogged] = useState("");
    const [ilmoError, setilmoError] = useState("");

    useEffect(() => {
        const sposti = sessionStorage.getItem('sposti');
        if (sposti) {
            setspostilogged(sposti);
        }
    }, []);

    useEffect(() => {
        const name = sessionStorage.getItem('name');
        if (name) {
            setname(name);
        }
    }, []);

    const setnameHandler = (event) => {
        setname(event.target.value);
    };

    const setspostiHandler = (event) => {
        setsposti(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSubmittingForm(true);
        
        let postData = {};

        if (continueWithoutLoggingIn) {
            postData = {
                name: name,
                sposti: sposti
            };
        } else {
            postData = {
                name: name,
                sposti: spostilogged
            };
        }

        axios.post('http://localhost:3003/ilmot', postData)
        .then(response => {
            console.log('Form sent successfully:', response.data);
            setname("");
            setsposti("");
            setilmoError("");
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.error) {
                setilmoError(error.response.data.error);
            } else {
                console.error('Error sending form:', error);
                setilmoError('An error occurred while submitting the form');
            }
        })
        .finally(() => {
            setSubmittingForm(false);
        });
    };
    return (
        <form onSubmit={handleFormSubmit}>
            {continueWithoutLoggingIn ? (
                <>
                    <label>Nimi: <input type="text" value={name} onChange={setnameHandler} /></label><br />
                    <label>Sähköposti: <input type="text" value={sposti} onChange={setspostiHandler} /></label><br />
                    <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
                </>
            ) : (
                <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
            )}
                {ilmoError && <p style={{ color: 'red' }}>{ilmoError}</p>}
        </form>
    );
}

export default Applyform;