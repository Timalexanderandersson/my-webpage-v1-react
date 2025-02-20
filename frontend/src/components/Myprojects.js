
import styles from '../styles/myprojects.module.css'
import frontImage from '../assets/frontttt.PNG';
import frontImage2 from '../assets/taskreminder.PNG';
import frontImage3 from '../assets/frågorispel.PNG';
import frontImage4 from '../assets/rockpaper.PNG';
import frontImage5 from '../assets/dawdawdad.PNG';
import IntersectionObserverComponent from '../components/fadeinfix'


const Myprojectscomp = ({options}) => {

    return (<>
    

   <div className={styles.projectsdiv} id="projects">
        <h2 className={styles.projectTitle}>Projekt</h2>
        
        <div className={styles.project} >
        <IntersectionObserverComponent options={options}>
            <a className={styles.projectLink} href="https://github.com/Timalexanderandersson/read-and-review-webpage" target="_blank" rel="noopener noreferrer">Read & Review</a>
            <div className={styles.projectContent}>
                <img className={styles.projectImage} src={frontImage} alt="Läs & Recensera" />

                <p className={styles.projectDescription}>
                    Webbplatsen är för personer som älskar att läsa och dela sina tankar om nyligen lästa böcker
                    eller för att helt enkelt upptäcka böcker du ännu inte har läst.
                    Du kan skriva recensioner på webbplatsen och knyta kontakt med andra läsare.
                </p>
            </div>

            <div className={styles.divtach}>
                <p className={styles.projectTech}>Django REST</p>
                <p className={styles.projectTech}>React</p>
                <p className={styles.projectTech}>PostgreSQL</p>
            </div>

            <div className={styles.divtach}>
                <p className={styles.projectTech}>Heroku</p>
                <p className={styles.projectTech}>Bootstrap</p>
                <a className={styles.githublink} href="https://github.com/Timalexanderandersson/read-and-review-webpage" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            </IntersectionObserverComponent>
        </div>
        
        

        
        <div className={styles.project}>
         <IntersectionObserverComponent options={options}>
            <a className={styles.projectLink} href="https://github.com/Timalexanderandersson/Task-Reminder" target="_blank" rel="noopener noreferrer">Task Reminder</a>
            <div className={styles.projectContent}>
                <img className={styles.projectImage} src={frontImage2} alt="Projekt 2" />
                <p className={styles.projectDescription}>Task Reminder.
                    Den är utformad för att hjälpa användare att hålla koll på viktiga saker som behöver göras.
                    Användaren kan skapa uppgifter, markera uppgifter som slutförda,
                    redigera uppgifterna och ta bort uppgifter</p>
            </div>
            <div className={styles.divtach}>
                <p className={styles.projectTech}>Django</p>
                <p className={styles.projectTech}>PostgreSQL</p>
                <p className={styles.projectTech}>Heroku</p>
            </div>

            <div className={styles.divtach}>
                <p className={styles.projectTech}>HTML</p>
                <p className={styles.projectTech}>CSS</p>
                <p className={styles.projectTech}>Bootstrap</p>
                <a className={styles.githublink} href="https://github.com/Timalexanderandersson/Task-Reminder" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            </IntersectionObserverComponent>
        </div>


        

        
        <div className={styles.project}>
        <IntersectionObserverComponent options={options}>
            <a className={styles.projectLink} href="https://github.com/Timalexanderandersson/Basic-Knowledge-Quiz" target="_blank" rel="noopener noreferrer">Basic Knowledge Quiz</a>
            <div className={styles.projectContent}>
                <img className={styles.projectImage} src={frontImage3} alt="Projekt 3" />
                <p className={styles.projectDescription}>Detta är ett quizspel för personer som gillar att testa sin allmänbildning
                    eller bara vill ha kul med ett frågespel! Quizen innehåller olika frågor om alla möjliga ämnen.
                    Basic Knowledge Quiz körs i Python-terminalen och som en Heroku-applikation.</p>
            </div>
            <div className={styles.divtach}>
                <p className={styles.projectTech}>Python</p>
                <p className={styles.projectTech}>Heroku</p>
                <a className={styles.githublink} href="https://github.com/Timalexanderandersson/Basic-Knowledge-Quiz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            </IntersectionObserverComponent>
        </div>
      
        
        <div className={styles.project}>
        <IntersectionObserverComponent options={options}>
            <a className={styles.projectLink} href="https://github.com/Timalexanderandersson/Rock-Paper-Scissors-Game" target="_blank" rel="noopener noreferrer">Rock Paper Scissors Game</a>
            <div className={styles.projectContent}>
                <img className={styles.projectImage} src={frontImage4} alt="Projekt 4" />
                <p className={styles.projectDescription}>Sten, Sax, Påse-spelet är ett spel skapat för den rena glädjen
                    att spela ett av världens äldsta handspel en riktig klassiker! Det spelas vanligtvis mot en annan person,
                    men här möter du datorns slumpmässiga val.
                    Spelet avgörs på bäst av tre omgångar.</p>
            </div>
            <div className={styles.divtach}>
                <p className={styles.projectTech}>HTML</p>
                <p className={styles.projectTech}>CSS</p>
                <p className={styles.projectTech}>Javascript</p>
                <a className={styles.githublink} href="https://github.com/Timalexanderandersson/Rock-Paper-Scissors-Game" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            </IntersectionObserverComponent>
        </div>

        
      
        <div className={styles.project}>
        <IntersectionObserverComponent options={options}>
            <a className={styles.projectLink} href="https://github.com/Timalexanderandersson/Get-More-Sleep-Website" target="_blank" rel="noopener noreferrer">Get More Sleep</a>
            <div className={styles.projectContent}>
                <img className={styles.projectImage} src={frontImage5} alt="Projekt 5" />
                <p className={styles.projectDescription}>Webbplatsen GetMoreSleep är för
                    personer som har svårt att somna och som behöver korta tips för att förbättra sömnkvaliteten,
                    få mer energi, snabbare återhämtning och somna snabbare. Sidan är  skapad med HTML och CSS
                    ,responsiv och stilren</p>
            </div>
            <div className={styles.divtach}>
                <p className={styles.projectTech}>HTML</p>
                <p className={styles.projectTech}>CSS</p>
                <p className={styles.projectTech}></p>
                <a className={styles.githublink} href="https://github.com/Timalexanderandersson/Get-More-Sleep-Website" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            </IntersectionObserverComponent>
        </div>
        

    </div>


</>
)
}

export default Myprojectscomp;