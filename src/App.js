import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => ({
      click: 0,
      name: window.localStorage.getItem(key) || defaultValue
    }));

    useEffect(() => {
      window.localStorage.setItem("name", events.name);
    }, [state.name]);

    return [state, setState];
  }

  const [events, setEvents] = useLocalStorage("name", "");

  function handleClicks() {
    setEvents({ ...events, click: events.click + 1 });
  }
  function handleChange(event) {
    setEvents({ ...events, name: event.target.value });
  }
  function resetClicks() {
    setEvents({ ...events, click: 0, name: "" });
  }
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
