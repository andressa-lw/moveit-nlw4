import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    barButtonCompleted,
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled type="button" className={styles.countdownButton}>Ciclo encerrado <img src="icons/check_circle.svg" alt=""/></button>
      ) : (
        <>
          { isActive ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
              Abandonar ciclo 
              <img src="icons/close_cicle.svg" alt=""/>
              <div className={styles.completionBar}>
                <div className={styles.completedBar} style={{ width: `${barButtonCompleted}%` }} ></div>
              </div>
            </button>
          ) : (
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar um ciclo <img src="icons/play_arrow.svg" alt=""/></button>
          )}
        </>
      )}

    </div>
    
  );
}