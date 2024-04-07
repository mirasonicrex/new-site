import React, { useState } from 'react';
import styles from  './slideShow.module.css'
import InstagramEmbed from './IntagramEmbed';
interface Post {
  id: number;
  permalink: string; 
}

const posts: Post[] = [

  {
    id: 1,
    permalink: "https://www.instagram.com/tv/CcwnwixFopQ/?utm_source=ig_embed&amp;utm_campaign=loading",

  },
  {
    id: 2,
    permalink: "https://www.instagram.com/reel/CeglLB8lXBE/?utm_source=ig_embed&amp;utm_campaign=loading",

  },
  {
    id: 3,
    permalink: "https://www.instagram.com/tv/Cco7TilFc4c/?utm_source=ig_embed&amp;utm_campaign=loading",

  },
  {
    id: 4,
    permalink: "https://www.instagram.com/tv/CdBDzeAlfWY/?utm_source=ig_embed&amp;utm_campaign=loading",

  },
  {
    id: 5,
    permalink: "https://www.instagram.com/reel/CexR7LGFOih/?utm_source=ig_embed&amp;utm_campaign=loading",

  },
  {
    id: 6,
    permalink: "https://www.instagram.com/reel/CemhTSZlynF/?utm_source=ig_embed&amp;utm_campaign=loading",

  },

];


const Slideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSet = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + posts.length) % posts.length);
      };
    const nextSet = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % posts.length);
    };
  
    const currentPosts = posts.slice(currentIndex, currentIndex + 3);
  
    return (
      <div className={styles.container}>
        <h1>3D Modeling & VFX Projects</h1>
         <div className={styles.buttonContainer}>
        <button onClick={prevSet}>Prev</button>
        <button onClick={nextSet}>Next</button>
        </div>
        <div className={styles.slideshowContainer}>
          {currentPosts.map((post) => (
            <div key={post.id} className={styles.post}>
              <InstagramEmbed  postUrl={post.permalink}/>
            </div>
          ))}
        </div>
  
  
      </div>
    );
  };
  
  export default Slideshow;