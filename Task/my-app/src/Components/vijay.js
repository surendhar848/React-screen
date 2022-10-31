//import {Grid} from "@mui/material"
import React from "react"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmailIcon from '@mui/icons-material/Email';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import { Typography } from "@mui/material";
import "./App.css"
import photo from "./Components/images/photo.jpg"
function App() {
  return (
      <div className="App-header">
         <div className="photo">  <img src={photo} alt=""/> </div>
        <div className='top'>
            
                <h4 className="p1">
                    PROJECT CREATED
                </h4>
                <h4 className="p2">
                    PROJECT COMPLETED
                </h4>
                <h4 className="p3">
                  PROJECT PUBLISHED
                </h4>
          </div>
     

<div className="name"><p>jason@ui-lib.com</p></div>
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
<div className="smilie">  <SentimentVerySatisfiedIcon/> <Typography>Dashboard</Typography></div>
<div className="star"> <StarBorderIcon/> <Typography>stars</Typography></div>
<div className="mail"> <EmailIcon/> <Typography>events</Typography> </div>
<div className="photo"> <Typography>Photos</Typography><PhotoLibraryIcon/> </div>
<div className="settings"> <Typography>settings</Typography><SettingsIcon/> </div>
<div className="people"> <Typography> contacts</Typography><PeopleIcon/> </div>
</div>


  );
}

export default App;
