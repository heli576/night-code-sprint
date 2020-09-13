import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.jpeg";



const AutoplaySlider = withAutoplay(AwesomeSlider);



const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor:"#68b0ab",
    width:"100%"
  },
container:{


  [theme.breakpoints.down('sm')]: {
  marginTop:0,
  marginLeft:0,
  marginRight:0,

 },
  [theme.breakpoints.up('md')]: {
    marginTop:0,
    marginLeft:140,
    marginRight:140,
  }
},




}));

const Home=()=>{

    const classes = useStyles();

    return(
      <div>
      <div className={classes.root}>
  <div className={classes.container}>
      <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
     cssModule={AwsSliderStyles} animation="cubeAnimation">
     <div data-src={Banner1}/>
      <div data-src={Banner2}/>
      <div data-src={Banner3}/>
    </AutoplaySlider>
    </div>
    </div>




    </div>





  )
}

export default Home;
