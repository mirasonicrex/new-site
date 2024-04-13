import { useState } from "react";
import styles from "./slideShow.module.css";
import InstagramEmbed from "./IntagramEmbed";
import { posts } from "../../../data/instagramData";
import TechTags from "../TechTags";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSet = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + posts.length) % posts.length
    );
  };
  const nextSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % posts.length);
  };

  const currentPosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.container}>
      <h1>3D Modeling & VFX Projects</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TechTags tags={["Blender"]} />
      </div>

      <div className={styles.slideshowContainer}>
        {currentPosts.map((post) => (
          <div key={post.id} className={styles.post}>
            <InstagramEmbed postUrl={post.permalink} />
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={prevSet}>Prev</button>
        <button onClick={nextSet}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
