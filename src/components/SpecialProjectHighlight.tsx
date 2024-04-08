import styles from "./SpecialProjectHighlight.module.css";
const SpecialProjectHighlight: React.FC = () => {
  return (
    <div className={styles.specialProjectContainer}>
      <section className={styles.projectSection}>
        <h2>Indie Game</h2>
        <p>
          <a
            href="https://thatisthegame.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ./ThisIsTheGame
          </a>{" "}
          is an indie game that I have been developing solo since October 2022.
          You play from the perspective of a game developer returning to an old
          project that you abandoned, only to find that the game has not stopped
          evolving since you left it. The game is coded in C# using Unity.
        </p>
        <li>
          <a
            href="https://thatisthegame.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Website
          </a>
        </li>
        <a   href="https://thatisthegame.com/"
            target="_blank"
            rel="noopener noreferrer">
        <img
            style={{
              alignSelf: "flex-end",
              maxWidth: "100%",
              height: "auto",
              marginRight: "2em",
            }}
            src="portfolio/pathfinding.gif"
            alt="Pathfinding Algorithm"
            width="450"
            height="300"
          />
          </a>
      </section>

      <section className={`${styles.projectSection} ${styles.alignLeft}`}>
        <h3>GOAP System</h3>
        <p>
          I created a custom AI system for the NPCs in my game. The system
          relies on a priority algorithm that weighs eight goals that relate to
          an NPC's needs and chooses the one with the highest priority. Once an
          agent decides on a goal, it uses the GOAP system to plan out the best
          sequence of actions to reach this goal, given the current world state.
          The system works like a pathfinding algorithm, exploring different
          combinations of actions until it finds a viable plan. It chooses the
          most cost-effective plan, meaning the plan that achieves the goal with
          the least amount of steps or resources.
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fQb0Iaj50bU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ul>
              <li style={{ margin: "1em", paddingTop: "30px" }}>
                <a
                  href="https://www.patreon.com/posts/making-npcs-come-85367782"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Making NPCs Come Alive, Adding GOAP To My Game
                </a>
              </li>
              <li style={{ margin: "1em" }}>
                <a
                  href="https://github.com/mirasonicrex/GOAPSample"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GOAP Sample Repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.projectSection} ${styles.alignLeft}`}>
        <h3>A* Pathfinding Algorithm</h3>
        <p>
          A custom A* pathfinding algorithm designed to work alongside Unity’s
          2D grid system, to add weights to tiles. Used with the custom AI
          system to move NPCs from one place to another while avoiding
          obstacles.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ul>
            <li style={{ margin: "1em", paddingTop: "30px" }}>
              <a
                href="https://www.patreon.com/posts/pathfinding-in-83425996"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pathfinding Lessons learned
              </a>
            </li>
            <li style={{ margin: "1em" }}>
              <a
                href="https://github.com/mirasonicrex/2DUnityAStarPathfinding"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
          <img
            style={{
              alignSelf: "flex-end",
              maxWidth: "100%",
              height: "auto",
              marginRight: "2em",
            }}
            src="portfolio/pathfinding.gif"
            alt="Pathfinding Algorithm"
            width="450"
            height="300"
          />
        </div>
      </section>
    </div>
  );
};

export default SpecialProjectHighlight;
