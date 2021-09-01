import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Launcher from "./components/Launcher";
import Home from "./components/Home";

export default function App() {
  return (
      <div>
          <BrowserRouter>
              <Route path="/app" component={Home} />
              <Route path="/" component={Launcher} exact/>
          </BrowserRouter>
      </div>
  );
}
