import React from "react";
import { StateProvider } from "./State/StateProvider";
import Router from "./Components/Router/index.js";
import initialState from "./State/InitialState";
import reducer from "./State/Reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     <Router/>
    </StateProvider>
  );
}
export default App;
