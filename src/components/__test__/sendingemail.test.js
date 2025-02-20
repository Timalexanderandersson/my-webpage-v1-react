import React from 'react';
import { render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import SendingEmail from '../sendingemail';

test('renders form with all input fields', () => {
    render(<SendingEmail />);
    expect(screen.getByPlaceholderText('Skriv ditt namn här!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Skriv din email här!')).toBeInTheDocument();
});
