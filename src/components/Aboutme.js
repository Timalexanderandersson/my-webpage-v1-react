import React from 'react';
import styles from '../styles/aboutme.module.css'
import Navbar from '../components/navbar';

const AboutMe = () => {
    return (
        <>
            <div className={styles.aboutmediv}>
                <div className={styles.newdiv}>
                    <h1 className='mt-4'>Tim Andersson</h1>
                    <p className='mt-3'>
                    Den här sidan är skapad för att visa mina projekt, erbjuda kontaktinformation och ge dig möjlighet att skicka meddelanden om du vill samarbeta eller bara veta mer om mig.
                    </p>
                    <div className={styles.links}>
                        <div className={styles.githublink}>
                            <a href="https://github.com/Timalexanderandersson" target="_blank" rel="noopener noreferrer"><i className={`${styles.iconlife} fa-brands fa-github icon`}></i></a>
                        </div>
                        <div className={styles.linkedinlink}>
                            <a href="https://www.linkedin.com/in/tim-andersson-5341a41bb" target="_blank" rel="noopener noreferrer"><i className={`${styles.iconlife} fa-brands fa-linkedin icon`}></i></a>
                        </div>
                        <div className={styles.instagramlink}>
                            <a href="https://www.instagram.com/timandersson94" target="_blank" rel="noopener noreferrer"><i className={`${styles.iconlife} fa-brands fa-instagram icon`}></i></a>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </>
    );
};

export default AboutMe;





