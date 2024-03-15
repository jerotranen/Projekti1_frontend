import { React, useState, useEffect} from "react";
import axios from 'axios'
import continueWithoutLoggingIn from './Login'
import { SubHeading, Wrapper } from './style'

const Applyform = ({ continueWithoutLoggingIn, isAdmin }) => {

    const [imageURL, setImageURL] = useState("");
    const [ilmot, setIlmot] = useState([]);
    const [formExists, setFormExists] = useState(false);
    const [name, setname] = useState("");
    const [sposti, setsposti] = useState("");
    const [submittingForm, setSubmittingForm] = useState(false);
    const [spostilogged, setspostilogged] = useState("");
    const [ilmoError, setilmoError] = useState("");
    const [isIlmoOpen, setIlmoOpen] = useState(false);
    const [formToDelete, setFormToDelete] = useState("");

    useEffect(() => {
        axios.get('https://13.51.198.237:5001/status')
            .then(response => {
                setIlmoOpen(response.data.isOpen);
            })
            .catch(error => {
                console.error('Status error:', error);
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
        axios.get(`https://13.51.198.237:5001/ilmot/${spostilogged}`)
        .then(response => {
            if (response.data) {
                setFormExists(true);
            } else {
                setFormExists(false);
            }
        })
    })

    // Kaikki ilmot näytetään tietoturvasyistä vain adminille
    useEffect(() => {
        if (isAdmin) {
            axios.get('https://13.51.198.237:5001/ilmot')
                .then(response => {
                    setIlmot(response.data);
                })
                .catch(error => {
                    console.error('Error getting ilmot:', error);
                });
        }
    }, [isAdmin]);

    const setnameHandler = (event) => {
        setname(event.target.value);
    };

    const setspostiHandler = (event) => {
        setsposti(event.target.value);
    };

    const handleImageURL = (event) => {
        setImageURL(event.target.value);
    };

    const handleDeleteAll = () => {
        axios.delete('https://13.51.198.237:5001/ilmot')
        window.location.reload();
    };

    const handleFormToDelete = (event) => {
        setFormToDelete(event.target.value);
    };

    const handleDeleteOne = () => {
        if (formToDelete.trim() !== "") {
            axios.delete(`https://13.51.198.237:5001/ilmot/${formToDelete}`)
    } }

    const toggleIlmoStatus = async () => {
        try {
            const newStatus = !isIlmoOpen;
            await axios.post('https://13.51.198.237:5001/status', { isOpen: newStatus });
            setIlmoOpen(newStatus);
            window.location.reload();
        } catch (error) {
            console.error('Error toggling status:', error);
        }
    };

    const handleURLsubmit = (event) => {
        event.preventDefault();
        axios.post('https://13.51.198.237:5001/image', { imageURL })
    }

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

        axios.post('https://13.51.198.237:5001/ilmot', postData)
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
    return (<div>
        <form onSubmit={handleFormSubmit}>
            {continueWithoutLoggingIn ? (
                <>
                    {isIlmoOpen ? (
                <>  <Wrapper>
                        <label>Nimi: <input type="text" value={name} onChange={setnameHandler} /></label><br />
                        <label>Sähköposti: <input type="text" value={sposti} onChange={setspostiHandler} /></label><br />
                        <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
                    </Wrapper>
                </>
                    ) : 'Ilmoittautuminen on suljettu :/'}
                </>
            ) : (
                <>
                {formExists ? (<p>Olet ilmoittautunut tapahtumaan!</p>) : (<p>Et ole ilmoittautunut tapahtumaan</p>)}
                {isIlmoOpen ? (
                    <>
                        <button type="submit" disabled={submittingForm}>Ilmoittaudu</button>
                    </>
                        ) : 'Ilmoittautuminen on suljettu :/'}
                    </>
            )} </form>
                {ilmoError && <p style={{ color: 'red' }}>{ilmoError}</p>}
                {isAdmin && (
                <div>
                    <h1>Hallintapaneeli Admin-käyttäjälle</h1>
                    <div>
                    <form onSubmit={handleURLsubmit}>  
                        <input type="text" value={imageURL} onChange={handleImageURL} />
                        <button type="submit">Lähetä URL kuvaan</button>
                    </form>
                    <form onSubmit={handleDeleteOne}>  
                        <input type="text" value={formToDelete} onChange={handleFormToDelete} />
                        <button type="submit">Poista henkilön ilmo sähköpostilla</button>
                    </form>
                    <button onClick={handleDeleteAll}>Poista kaikki ilmoittautumiset</button>
                    <button onClick={toggleIlmoStatus}>{isIlmoOpen ? 'Sulje ilmo' : 'Avaa ilmo'}</button> 
                    </div>
                    <SubHeading>Ilmoittautumiset</SubHeading>
                        <ul>
                            {ilmot.map(ilmo => (
                                <li key={ilmo._id}>{ilmo.name} - {ilmo.sposti}</li>
                            ))}
                        </ul>
                </div>
            )}
            </div>
    );
}

export default Applyform;