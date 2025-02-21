import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom";
import SendingEmail from '../sendingemail';
import { render, screen } from "@testing-library/react";

test('displays submit button in the contact', () => {
    render(
        <Router>
            <SendingEmail />
        </Router>
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

});

test('text showing after sent message', () => {
    render(
        <Router>
            <SendingEmail />
        </Router>
    );
    const showmessageafter = screen.getByText('Tack för ditt meddelande, jag hör av mig så fort som möjligt')
    expect(showmessageafter).toBeInTheDocument();

});


