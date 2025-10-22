import { useEffect, useState } from "react";

function BlinkButton() {
  const [value, setValue] = useState(false); // toggles blink
  const [color, setColor] = useState(""); // current blink color

  useEffect(() => {
    const blink = setInterval(() => {
      setValue(prev => !prev); // toggle on/off
    }, 100);

    return () => clearInterval(blink); // cleanup
  }, []); // run once on mount

  const handleClick = (clr) => {
    setColor(clr); // set blinking color
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        <button onClick={() => handleClick("red")}>Red</button>
        <button onClick={() => handleClick("yellow")}>Yellow</button>
        <button onClick={() => handleClick("green")}>Green</button>
      </div>
      <div
        style={{
          backgroundColor: value ? color : "white", // blink effect
          width: "200px",
          height: "200px",
          margin: "20px auto",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
}

export default BlinkButton
