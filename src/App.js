import React from "react";
import Map from "./components/Map";
import { Switch, Route } from "react-router-dom";
import Index from "./components";


export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Map} />
      </Switch>
    </>
  );
}
