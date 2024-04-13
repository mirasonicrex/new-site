import { useEffect } from 'react';

interface InstagramEmbedProps {
  postUrl: string
}
const InstagramEmbed = ({ postUrl }:  InstagramEmbedProps) => {
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
      <p style={{minHeight: '550px'}}>Loading...</p>
    </blockquote>
  );
};

export default InstagramEmbed;