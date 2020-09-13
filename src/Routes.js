import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';


import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./theme";

import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import MapContainer from "./pages/MapContainer";
import Appbar from "./components/Appbar";



const theme=createMuiTheme(themeFile);

const Routes=()=>{
  return(
    <MuiThemeProvider theme={theme}>
      <Router>
<Appbar/>
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/location" exact component={MapContainer}/>
      <Route path="/appointment" exact component={Appointment}/>

    </Switch>
    </Router>
    </MuiThemeProvider>

  )
}

export default Routes;
