import styles from "./RockPaperScissor.module.css";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissor from "../images/scissor.png";

const RockPaperScissor = ({
  userChoice,
  compChoice,
  userScore,
  compScore,
  winner,
  displayMsg,
  bgColor,
  onClickHandler,
  resetBtnHandler,
  message,
}) => {
  return (
    <div className={`${styles.appContainer} container`}>
      <h1 className={styles.appName}>Rock Paper Scissor</h1>
      <div className={styles.imgContainer}>
        <div className={`${styles.item}`}>
          <img src={rock} name="Rock" alt="Rock" onClick={onClickHandler} />
        </div>
        <div>
          <div>
            <img
              src={paper}
              name="Paper"
              alt="Paper"
              onClick={onClickHandler}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={scissor}
              name="Scissor"
              alt="Scissor"
              onClick={onClickHandler}
            />
          </div>
        </div>
      </div>
      <div className={styles.scoreContainer}>
        <div>
          <p className={styles.score}>{userScore}</p>
          <p className={styles.player}>You</p>
        </div>
        <div>
          <p className={styles.score}>{compScore}</p>
          <p className={styles.player}>Computer</p>
        </div>
      </div>
      <span className={styles.winMsg} style={{ backgroundColor: bgColor }}>
        {displayMsg}
      </span>

      <p
        className={styles.msg}
        style={{
          visibility: winner === "" || message ? "hidden" : "visible",
        }}
      >
        You chose <strong>{userChoice}</strong>. Computer chose{" "}
        <strong>{compChoice}</strong>.
      </p>
      <button className="btn btn-danger" onClick={resetBtnHandler}>
        Reset Game
      </button>
    </div>
  );
};

export default RockPaperScissor;
