import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [events, setEvents] = useState(() => ({
    click: 0,
    name: window.localStorage.getItem("name") || ""
  }));
  function handleClicks() {
    setEvents({ ...events, click: events.click + 1 });
  }
  function handleChange(event) {
    setEvents({ ...events, name: event.target.value });
  }
  function resetClicks() {
    setEvents({ ...events, click: 0 });
  }
  useEffect(() => {
    window.localStorage.setItem("name", events.name);
  });
  return (
    <div className="App">
      <p>There have been {events.click} clicks</p>
      <button onClick={handleClicks}>Click</button>
      <button onClick={resetClicks}>Reset</button>
      <p>Your name is: {events.name}</p>
      <input value={events.name} onChange={handleChange} />
      {events.name ? <p>Hello {events.name}</p> : null}
    </div>
  );
}
