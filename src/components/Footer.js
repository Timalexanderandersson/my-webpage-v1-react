import React from 'react';
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerdiv}>
            <div className={styles.footericons}>
                <p className={styles.madeWith}>&copy; Tim Andersson.</p>
                <p className={styles.madeWith}>Denna websida är gjord med Django REST <i className="fa-brands fa-python"> </i> och med React <i className="fa-brands fa-react"></i>.</p>
            </div>
        </footer>
    );
};

export default Footer;