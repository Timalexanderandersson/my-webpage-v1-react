
import React from 'react';
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom';

/**
 * Navbar component renders the navigation bar with links to different sections of the webpage.
 * It includes links to "Om mig", "Projekt", "Skills", "Kontakta mig", and a router link to "Skicka meddelande".
 * 
 * 
 */
const Navbar = () => {
    return (
        <nav className={styles.navbardiv}>
            <hr className={styles.hr} />
            <div className={styles.linkContainer}>
            <div className={styles.linkWrapper}><a className={styles.navLink} href="/#Bio">Om mig</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="/#projects">Projekt</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="/#skills" >Skills</a></div>
                <div className={styles.linkWrapper}><a className={styles.navLink} href="/#kontaktamig">Kontakta mig</a></div>
                <div className={styles.linkWrapper}><Link className={styles.navLink} to="/kontakt">Skicka meddelande</Link></div>
            </div>
            <hr className={styles.hr} />
        </nav>
    );
};

export default Navbar;