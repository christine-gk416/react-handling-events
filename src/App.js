import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import MethodsAsPropsChild from "./components/MethodsAsPropsChild";

function App() {
  return (
    <div className="App">
      {/* <EventsClass /> */}
      {/* <EventsFunctional /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass/> */}
      {/* <ConditionalRenderingFunctional connected={false}/> */}
      {/* <NestingComponents/> */}
      <MethodsAsPropsParent/>
      
    </div>
  );
}

export default App;
