import { useEffect, useState } from "react"

 

const Clock = () => {
  const [time, setTime] = useState("");
  const [clockColor, setClockColor] = useState("green");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Clock</h1>

      <select onChange={(e) => setClockColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="skyblue">Skyblue</option>
        <option value="yellow">Yellow</option>
      </select>

      <h1
        style={{
          color: clockColor,
          backgroundColor: "#000",
          width: "180px",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;