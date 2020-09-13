import React,{Fragment} from "react";
import {Link,withRouter, NavLink} from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import {Navbar,Nav} from 'react-bootstrap';
import logo from "../images/logo.png";


const useStyles = makeStyles((theme) => ({
  navcolor:{
    backgroundColor:"#68b0ab"
  }

}));

const Appbar=({history})=>{
  const classes = useStyles();
return (
    <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" className={classes.navcolor}>
      <Navbar.Brand component={Link} to="/"> <img
            alt=""
            src={logo}
            width="40"
            height="40"
          //  className="d-inline-block align-top"
          />{' '}
          FindMyDr</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
  <Nav.Link as={NavLink} to='/location' exact>Your location</Nav.Link>
  <Nav.Link as={NavLink} to='/appointment' exact>Book Appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}



export default withRouter(Appbar);
