import TechTags from "./TechTags";
import styles from "./three.module.css";
const ThreeProject = () => {
  return (
    <div className={styles.container}>
      <h2>Recent Projects</h2>
      <h3>Three.js Website - April 2024</h3>
      <img
        alt="three.js Website"
        width="650"
        height="auto"
        src="imgs/aprilScreenshot.png"
      ></img>
        <TechTags tags={["Three.js", "React", "TypeScript", "CSS"]} />
      <p>
        An experimental site created with Three.js and React that guides the
        user through the progress of my indie game ./ThisIsTheGame
      </p>
      <a
        className={styles.link}
        href="https://github.com/mirasonicrex/three-js-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </div>
  );
};

export default ThreeProject;
