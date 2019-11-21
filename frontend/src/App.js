import React from "react";
//import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NotesList from "./components/NotesList/NotesList";
import CreateNote from "./components/CreateNote/CreateNote";
import CreateUser from "./components/CreateUser/CreateUser";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navigation />
        <Route exact path="/" component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
