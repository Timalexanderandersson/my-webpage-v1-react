import React from 'react';
import styles from '../styles/skillsection.module.css'
import IntersectionObserverComponent from '../components/fadeinfix'

const SkillsSection = ({options}) => {
    return (
        <IntersectionObserverComponent options={options}>
        <div className={styles.skillsectiondiv} id="skills" >
            
            <div className={styles.skillcontainer}>
                <h2 className='mb-3 mt-3'>Teknisk Kompetens</h2>
                <div className={styles.containsall}>

                    <div className={styles.divfirsttop}>
                        <div className={styles.technopart}>
                            <h5 className={styles.heading1}>Teknologier</h5>
                            <div className={styles.deletliststyle}>
                                <li>React</li>
                                <li>Python</li>
                                <li>Django REST</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </div>
                        </div>

                        <div className={styles.database}>
                            <h5 className={styles.heading1}>Database</h5>
                            <div className={styles.deletliststyle}>
                                <li>PostgreSQL</li>
                            </div>
                        </div>

                        <div className={styles.tools}>
                            <h5 className={styles.heading1}>Ramverk & Bibliotek</h5>
                            <div className={styles.deletliststyle}>
                                <li>Django</li>
                                <li>Django REST</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </div>
                        </div>

                    </div>
                    <hr className={styles.hrstyling}></hr>
                    <div className={styles.divfirstbottom}>
                        <div className={styles.versionss}>
                            <h5 className={styles.heading}>Versionshantering</h5>
                            <div className={styles.latsdiv}>
                                <p className={styles.wochill}>Git</p>
                                <p className={styles.wochill}>GitHub</p>
                            </div>
                        </div>

                        <div className={styles.distrubuuut}>
                            <h5 className={styles.heading}>Distribution</h5>
                            <div className={styles.latsdiv}>
                                <p className={styles.wochill}>Heroku</p>
                            </div>
                        </div>

                        

                    </div>

                </div>
                <hr className={styles.hrstyling}></hr>
                <div className={styles.firstflipping}>
                    <div className={styles.innerdivfardown}>
                    <div className={styles.testing}>
                            <h5 className={styles.newtesting}>Testing</h5>
                            <div className={styles.newlistcss}>
                                <p className={styles.wochill}>Django testing(pytest)</p>
                            </div>
                        </div>

                    </div>
                
                </div>
            </div>
            
        </div>
        </IntersectionObserverComponent>
        
    );
};

export default SkillsSection;