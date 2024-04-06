import { useEffect } from 'react';

const InstagramEmbed = ({ postUrl }:  any) => {
  useEffect(() => {
    const loadInstagramEmbedScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
      // Try to run the script after it is loaded
      script.onload = () => {
        // @ts-ignore
        if (window.instgrm) {
          // @ts-ignore
          window.instgrm.Embeds.process();
        }
      };
    };

    loadInstagramEmbedScript();
  }, [postUrl]);

  return (
    <blockquote className="instagram-media" data-instgrm-permalink={postUrl}>
      <p >Loading...</p>
    </blockquote>
  );
};

export default InstagramEmbed;