import styles from "./techTags.module.css"

interface TechProps {
  tags: string[]
}
const TechTags = ({ tags }: TechProps) => (
    <div className={styles.technologies}>
      {tags.map((tag: string) => <div key={tag}>{tag}</div>)}
    </div>
  );

  export default TechTags;