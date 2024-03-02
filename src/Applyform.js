import { React, useState} from "react";
import axios from 'axios'
import continueWithoutLoggingIn from './Login'

const Applyform = ({ continueWithoutLoggingIn }) => {

    const [name, setname] = useState("");
    const [sposti, setsposti] = useState("");
    const [submittingForm, setSubmittingForm] = useState(false);

    const setnameHandler = (event) => {
        setname(event.target.value);
    };

    const setspostiHandler = (event) => {
        setsposti(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSubmittingForm(true);

        axios.post('http://localhost:3003/ilmot', {
            name: name,
            sposti: sposti
        })
        .then(response => {
            console.log('Form sent successfully:', response.data);
            setname("");
            setsposti("");
        })
        .catch(error => {
            console.error('Error sending form:', error);
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
        </form>
    );
}

export default Applyform;