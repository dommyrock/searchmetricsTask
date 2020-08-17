import React from "react";
import "./App.css";
import { AppProvider } from "./context/AppProvider";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </div>
  );
}

export default App;

//total time spent
// components + app structure 2hr
// add,delete functionality ,context,reducers 3.5hr
// api ,data propagation 2hr
// css 0.5hr

//~ 8-9hr total

// (if i had more time to spend i would use it on css and more features like:
// click on keyword div that opens up textbox where you can delete desired keywords)
