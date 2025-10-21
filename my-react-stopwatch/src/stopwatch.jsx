import { useState, useEffect, useRef } from "react";

function StopWatch() {
  // State to track if the stopwatch is currently running or not
  const [isRunning, setIsRunning] = useState(false);

  // State to track total elapsed time in milliseconds
  const [elapsedTime, setElapsedTime] = useState(0);

  // useRef to store the interval ID (so it doesn't reset on re-renders)
  const intervalIdRef = useRef(null);

  // useRef to store the start time of the stopwatch
  const startTimeRef = useRef(0);

  // useEffect runs when isRunning changes
  useEffect(() => {
    if (isRunning) {
      // If running, start an interval that updates elapsedTime every 10 ms
      intervalIdRef.current = setInterval(() => {
        // elapsedTime = current time - start time
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    // Cleanup function — clears interval when component unmounts or isRunning changes
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  // Start button handler
  function start() {
    setIsRunning(true);
    // Set startTimeRef to current time minus elapsedTime (for resume support)
    startTimeRef.current = Date.now() - elapsedTime;
  }

  // Stop button handler
  function stop() {
    setIsRunning(false); // Stops the interval
  }

  // Reset button handler
  function reset() {
    setElapsedTime(0); // Reset time
    setIsRunning(false); // Stop running if active
  }

  // Helper function to format time nicely (mm:ss:ms)
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Convert to two digits for display (e.g., 05 instead of 5)
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Return formatted string
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch">
      {/* Display formatted time */}
      <div className="display">{formatTime()}</div>

      {/* Control buttons */}
      <div className="control">
        <button onClick={start} className="start-button">
          Start
        </button>
        <button onClick={stop} className="stop-button">
          Stop
        </button>
        <button onClick={reset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
