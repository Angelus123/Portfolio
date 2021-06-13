import React from'react'
import LaunchIcon from '@material-ui/icons/Launch';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import BatteryCharging60Icon from '@material-ui/icons/BatteryCharging60';
import ComputerIcon from '@material-ui/icons/Computer';

import './Hello.css'
import Aux from '../../hoc/Auxi/Auxilliary'
const hello = (props) =>{
  //This could be functional component ,it doesn't have to be class component

    return (
      <Aux>
{/* <!-- ======= Hero Section ======= --> */}
        <section id="hello-sect">
          <div id="hello-sect-container">
            
            
           

            <div  className ="hero-izere">
              <h3 style={{color:' rgb(112, 1, 1)'}}> <BuildIcon />!!This Portfolio is underconstruction <i style={{color:' yellowgreen'}}>but over 60% <BatteryCharging60Icon/>is done</i></h3>
               <p>Any review will be highly appreciated</p>
                 <h1 > <ContactMailIcon />About ME</h1>
                <h1 >IZERE A. Felix</h1><WorkIcon /> Freelancer
                <h2 > <ComputerIcon style={{fontSize:'36px'}}/>I'm a <span>~ Software Designer & Developer~</span></h2>
                  <a href="https://github.com/Angelus123"><GitHubIcon style={{fontSize:'48px',padding:'5px'}}/>GitHub Angelus123</a>
                  <a href="https://github.com/Angelus123"><EmailIcon style={{fontSize:'48px',padding:'0 5px'}}/>izerefaifelix@gmail.com</a>
                  <p > <LocationOnIcon style={{fontSize:'48px',color:'green'}}/>Kigali, Rwanda</p>
                  <p > <SchoolIcon style={{fontSize:'28px',color:'white'}}/>University of Rwanda</p>
            </div>
             <div className ="hero-izere">
                <h1 >Recent project</h1>
                <p >UECR Website <LaunchIcon /></p>
                <p >Akagera&Rheign<LaunchIcon /></p>
                <p >TeamWork Manager<LaunchIcon /></p>
                <p >Trip Manager<LaunchIcon /></p>
                <p >Virtual Learning<LaunchIcon /></p>
                <p >Burger Builder <LaunchIcon /></p>
                <p>Blog Post <LaunchIcon /></p>
              </div>

          
          </div>
            
        </section>
{/* <!-- End Hero -- ggg> */}
      </Aux>)
    
  }


export default hello