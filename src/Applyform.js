import { React, useState, useEffect} from "react";
import axios from 'axios'
import continueWithoutLoggingIn from './Login'

const Applyform = ({ continueWithoutLoggingIn, isAdmin }) => {

    const [ilmot, setIlmot] = useState([]);
    const [name, setname] = useState("");
    const [sposti, setsposti] = useState("");
    const [submittingForm, setSubmittingForm] = useState(false);
    const [spostilogged, setspostilogged] = useState("");
    const [ilmoError, setilmoError] = useState("");
    const [isIlmoOpen, setIlmoOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3003/status')
            .then(response => {
                setIlmoOpen(response.data.isOpen);
            })
            .catch(error => {
                console.error('Error fetching registration status:', error);
            });
    }, []);

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

    useEffect(() => {
        axios.get('http://localhost:3003/ilmot')
            .then(response => {
                setIlmot(response.data);
            })
            .catch(error => {
                console.error('Error fetching "ilmot" data:', error);
            });
    }, []);

    const setnameHandler = (event) => {
        setname(event.target.value);
    };

    const setspostiHandler = (event) => {
        setsposti(event.target.value);
    };

    const handleDeleteAll = () => {
        axios.delete('http://localhost:3003/ilmot')
    };

    const toggleIlmoStatus = async () => {
        try {
            const newStatus = !isIlmoOpen;
            await axios.post('http://localhost:3003/status', { isOpen: newStatus });
            setIlmoOpen(newStatus);
        } catch (error) {
            console.error('Error toggling registration status:', error);
        }
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
                    {isIlmoOpen ? (
                <>
                        <label>Nimi: <input type="text" value={name} onChange={setnameHandler} /></label><br />
                        <label>Sähköposti: <input type="text" value={sposti} onChange={setspostiHandler} /></label><br />
                        <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
                </>
                    ) : 'Ilmoittautuminen on suljettu :/'}
                </>
            ) : (
                <>
                {isIlmoOpen ? (
                    <>
                        <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
                    </>
                        ) : 'Ilmoittautuminen on suljettu :/'}
                    </>
            )}
                {ilmoError && <p style={{ color: 'red' }}>{ilmoError}</p>}
                {isAdmin && (
                <div>
                    <div>
                    <button onClick={handleDeleteAll}>Poista kaikki ilmoittautumiset</button>
                    <button onClick={toggleIlmoStatus}>{isIlmoOpen ? 'Sulje ilmo' : 'Avaa ilmo'}</button> 
                    </div>
                    <h2>Ilmoittautumiset</h2>
                        <ul>
                            {ilmot.map(ilmo => (
                                <li key={ilmo._id}>{ilmo.name} - {ilmo.sposti}</li>
                            ))}
                        </ul>
                </div>
            )}
        </form>
    );
}

export default Applyform;