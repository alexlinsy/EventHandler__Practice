import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [events, setEvents] = useState({ click: 0, name: "" });
  function handleClicks() {
    setEvents({ ...events, click: events.click + 1 });
  }
  function handleChange(event) {
    setEvents({ ...events, name: event.target.value });
  }
  function resetClicks() {
    setEvents({ ...events, click: 0 });
  }
  return (
    <div className="App">
      <p>There have been {events.click} clicks</p>
      <button onClick={handleClicks}>Click</button>
      <button onClick={resetClicks}>Reset</button>
      <p>Your name is: {events.name}</p>
      <input onChange={handleChange} />
      {events.name ? <p>Hello {events.name}</p> : null}
    </div>
  );
}
