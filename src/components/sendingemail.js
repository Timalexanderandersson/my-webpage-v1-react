import React from 'react';
import styles from '../styles/sendingemail.module.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';



const SendingEmail = () => {

    const [input, setInput] = useState({
        name: '',
        email_here: '',
        description: ''
    });
    const [submitting, setSubmitting] = useState(true);
    const { name, email_here, description } = input;
    const [errors, setErrors] = useState({});

    /**
     * Handles the change event for input fields.
     * Updates the input state with the new value from the event target.
     */
    const handleChangeing = e => {
        setInput({ ...input, [e.target.name]: e.target.value });

    };
    /**
     * 
     * Handles the submition for the form sending a post to the api backend.
     */

    const handlingSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('sendmail/', input);
            setSubmitting(true);
            setInput('');

        } catch (error) {
            setErrors(error.response.data);
            let errorhere = error.response.data;
            if (errorhere.name) {
                errorhere.name = "Skriv ditt namn hära!";
            }
            if (errorhere.email_here) {
                errorhere.email_here = "Fyll i din epost!";
            }
            if (errorhere.description) {
                errorhere.description = "Du måste skriva något!";
            }


        }

    };

    return (
        <div className={styles.sendingemaildiv} id="message">
            <div className={styles.emailcontainer}>
                {submitting ? (
                    <div className={styles.sendingback1}>
                        <div className={styles.sendingback}>
                            <h1 className='mt-4'> Tack för ditt meddelande, jag hör av mig så fort som möjligt</h1>

                        </div>
                        <Link className={styles.backlink} to="/">Gå till framsidan</Link>
                        <p className={styles.gubbenilodan}>🏃</p>
                    </div>
                ) : (<>
                    <h4 className={styles.heading}>Frågor eller funderingar?</h4>
                    <h4 className={styles.heading}>skicka ett meddelande till mig!</h4>
                    <Form className={styles.formcontainer} onSubmit={handlingSubmit}>
                        <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlInput1">

                            <Form.Label className={styles.alllmylables}>Namn</Form.Label>
                            {errors.name && <div className="alert alert-danger" role="alert">{errors.name}</div>}

                            <Form.Control type="text"
                                placeholder="Skriv ditt namn här!"
                                name="name"
                                value={name}
                                onChange={handleChangeing}
                            />
                        </Form.Group>
                        <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlInput1">
                            <Form.Label className={styles.alllmylables}>Email</Form.Label>
                            {errors.email_here && <div className="alert alert-danger" role="alert">{errors.email_here}</div>}
                            <Form.Control type="email"
                                placeholder="Skriv din email här!"
                                name="email_here"
                                value={email_here}
                                onChange={handleChangeing}
                            />
                        </Form.Group>
                        <Form.Group className={`mb-3 ${styles.allinputs}`} controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={styles.alllmylables}>Vad är din fråga?</Form.Label>
                            {errors.description && <div className="alert alert-danger" role="alert" >{errors.description}</div>}
                            <Form.Control as="textarea" rows={3}
                                name="description"
                                value={description}
                                onChange={handleChangeing}
                            />
                        </Form.Group>
                        <button className={styles.coolbutton}>skicka email</button>
                    </Form>
                </>)}

            </div>
        </div>
    );
};

export default SendingEmail;