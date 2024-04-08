import styles from './three.module.css'
const ThreeProject: React.FC = () => {
return (
    <div className={styles.container}>
        <h2>Recent Projects</h2>
        <h3>Three.js Website - April 2024</h3>
         <img width="650" height="auto" src="imgs/aprilScreenshot.png"></img>
         <div>
         <div className={styles.technologies}>Three.js</div>
        <div className={styles.technologies}>React</div>
        <div className={styles.technologies}>Typescript</div>
        <div className={styles.technologies}>  CSS</div>
         </div>
    
        <p>An experimental site created with Three.js and React that guides the user through the progress of my indie game ./ThisIsTheGame</p>
        <a 
        className={styles.link}
              href="https://github.com/mirasonicrex/three-js-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
    </div>
)
}

export default ThreeProject;