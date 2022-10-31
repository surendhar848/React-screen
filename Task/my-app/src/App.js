//import {Grid} from "@mui/material"
import React from "react"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmailIcon from '@mui/icons-material/Email';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Typography } from "@mui/material";
import "./App.css"
import photo from "./Components/images/photo.jpg"
import mountain from "./Components/images/mountain.jpg"
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ph1 from "./Components/images/ph1.png"
import ph2 from "./Components/images/ph2.png"
import ph3 from "./Components/images/ph3.png"
import ph4 from "./Components/images/ph4.png"
import ph5 from "./Components/images/ph5.png"
import ph6 from "./Components/images/ph6.png"
import ph7 from "./Components/images/ph7.png"
import ph8 from "./Components/images/ph8.png"

function App() {
  return (
    <div>
      <div className="background">
      
      <div><img className="photo" src={photo} alt=""/></div>
    
        <div className="t1"><p className="create1">PROJECT CREATED</p><p className="create2">11</p></div>
        <div className="t1"><p className="create1">PROJECT PUBLISHED</p><p className="create2">15</p></div>
        <div className="t1"><p className="create1">PROJECT COMPLETED</p><p className="create2">25</p></div>
        
       </div>
       <div className="corner">
       <div className="container"><p className="cont1">Data Use</p>
       
       <div className="box">
        <div className="skill">
          <div className="graph" style={{ height:"40%",}}>
            <div className="sat" >Sat</div>
          </div>
        </div>
       </div>


       <div className="box">
        <div className="skill">
          <div className="graph" style={{ height:"60%",}}>
            <div className="sun">Sun</div>
          </div>
        </div>
       </div>



       <div className="box">
        <div className="skill">
          <div className="graph" style={{ height:"80%",}}>
            <div div className="mon">Mon</div>
          </div>
        </div>
       </div>


       <div className="box">
        <div className="skill">
          <div className="graph"  style={{ height:"80%",}}>
            <div className="tues">Tues</div>
          </div>
        </div>
       </div>


       <div className="box">
        <div className="skill">
          <div className="graph" style={{ height:"60%",}}>
            <div className="wed">Wed</div>
          </div>
        </div>
       </div>



       <div className="box">
        <div className="skill">
          <div className="graph" style={{ height:"40%",}}>
            <div className="thurs">Thu</div>
          </div>
        </div>
       </div>


       <div className="box">
        <div className="skill">
          <div className="graph">
            <div className="fri">Fri</div>
          </div>
        </div>
       </div>



       







       <div className="b1"><p className="b2">140</p><p className="b3">AVG YEARLY</p></div>
        <div className="b1"><p className="b4">12</p><p className="b5">AVG MONTHLY</p></div>
        <div className="b1"><p className="b6">3</p><p className="b7">AVG WEEKLY</p></div>
       </div>
       <div className="name"><h5>jason@ui-lib.com</h5></div>
        <div className="name1">
        <h4>
        BALANCE<span>POINTS</span>
        </h4>
        </div>
        <div className="name2">
        <h3>
        $ 20,495<span>PT 3,000</span>
        </h3>
       </div>
       </div>
       <div className="icon">  <SentimentVerySatisfiedIcon/> <Typography>Dashboard</Typography></div>
<div className="icon1"> <StarBorderIcon/> <Typography>stars</Typography></div>
<div className="icon2"> <EmailIcon/> <Typography>events</Typography> </div>
<div className="icon3"> <PhotoLibraryIcon/> <Typography>Photos</Typography></div>
<div className="icon4"> <SettingsIcon/> <Typography>settings</Typography></div>
<div className="icon5"><PeopleIcon/>  <Typography> contacts</Typography></div>
<div className="icon6">  <SentimentVerySatisfiedIcon/> <p className="icon9">Upgrade to premium</p></div>
       <div>
       <div className="container1"><p className="data">Data Use</p>
       <div><img className="ph1" src={ph1} alt=""/></div>
       <p className="con1">Watson Joyce</p><p className="con2">London</p>
       <div><img className="ph1" src={ph2} alt=""/></div>
       <p className="con1">Watson Joyce</p><p className="con2">London</p>
       <div><img className="ph1" src={ph3} alt=""/></div>
       <p className="con1">Watson Joyce</p><p className="con2">London</p>
       <div><img className="ph1" src={ph4} alt=""/></div>
       <p className="con1">Watson Joyce</p><p className="con2">London</p></div>
       </div>

       <div className="container2">
       <div><img className="ph2" src={ph5} alt=""/></div>
        <p className="con3">Master Card</p><p className="con4">Bundled product</p>
        <div><img className="ph2" src={ph6} alt=""/></div>
        <p className="con3">Master Card</p><p className="con4">Bundled product</p>
        <div><img className="ph2" src={ph7} alt=""/></div>
        <p className="con3">Paypal</p><p className="con4">Bundled product</p>
        <div><img className="ph2" src={ph8} alt=""/></div>
        <p className="con3">Paypal</p><p className="con4">Bundled product</p>
        <div><img className="ph2" src={ph8} alt=""/></div>
        <p className="con3">Master Card</p><p className="con4">Bundled product</p></div>
       
       <div  className="container3"><div className="trend"><TrendingUpIcon/> </div>
       <div className="heart"><FavoriteIcon/><Typography>65</Typography></div>
       <div className="message"><MessageIcon/><Typography>65</Typography></div>
       <p className="u1">Update Profile Picture</p><p className="u2">12/03/2019</p>
       <div><img className="mountain" src={mountain} alt=""/></div>
       </div> 
       <div  className="container4"> <div className="icon7"> <StarBorderIcon/></div>
       <p className="a1">Bought Air Ticket</p><p className="a2">12/03/2019</p><p className="a3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       </div> 
       <div  className="container5"> <div className="icon8"> <CalendarMonthIcon/></div>
       <p className="a1">Timeline Box Title</p><p className="a2">12/03/2019</p><p className="a3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       </div> 
       </div>
    
      

  );
}

export default App;
