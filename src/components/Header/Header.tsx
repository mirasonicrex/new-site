import React from "react";
import { Link } from "react-scroll";

import styles from "./header.module.css"; 

const Header = () => {
  return (
    <div className={styles.header}>
            <Link
        className={styles.headerLink}
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        className={styles.headerLink}
        to="recentProjects"
        spy={true}
        smooth={true}
        duration={500}
      >
        Recent Projects
      </Link>
      <Link
        className={styles.headerLink}
        to="pastPortfolios"
        spy={true}
        smooth={true}
        duration={500}
      >
        Past Portfolios
      </Link>
      <Link
        className={styles.headerLink}
        to="dashboard"
        spy={true}
        smooth={true}
        duration={500}
      >
        Past Projects
      </Link>
    </div>
  );
};

export default Header;
