import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <img src="portfolio/me.jpg" alt="Profile" className={`${styles.profileImage} ${styles.fadeInUp}`} width="30%" height="auto" />
      <div className={styles.about}>
        <p className={`${styles.aboutText} ${styles.fadeInUp}`}>
          <b>Software Engineer</b> with experience in <b>Full Stack Development</b> and <b>Testing</b>
        </p>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/miraheckmann/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/mirasonicrex" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
  
    </div>
  );
}

export default About;