import React from 'react';
import styles from '../styles/resume.module.css';
import IntersectionObserverComponent from '../components/fadeinfix'

const Resumecont = ({options}) => {
    return (
        <IntersectionObserverComponent options={options}>
        <div className={styles.container}>
            <div className={styles.resumediv} id="kontaktamig">
                <div className={styles.resumercontainer}>
                    <h1 className={styles.resumeheader}>Kontakta mig</h1>
                    <p className={styles.contactInfo1}>Tim Andersson</p>
                    <p className={styles.contactInfo1}>Skellefteå kommun, Västerbotten</p>
                    <hr className={styles.hrElement}></hr>
                    <a href="mailto:timalexanderandersson@hotmail.com" className={styles.contactInfo}>
                        timalexanderandersson@hotmail.com
                    </a>
                    <hr className={styles.hrElement}></hr>
                </div>
                
            </div>
        </div>
        </IntersectionObserverComponent>
    );
};

export default Resumecont;