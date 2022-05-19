import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";

function App() {
  return (
    <div className="App">
      <EventsClass />
      <EventsFunctional />
      <EventBinding />
    </div>
  );
}

export default App;
