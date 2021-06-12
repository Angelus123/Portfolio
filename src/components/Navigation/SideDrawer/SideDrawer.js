import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import'./SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxilliary';

const sideDrawer = ( props ) => {  
    let attachedClasses = ['SideDrawer', 'Close']
    if(props.open){
       
        attachedClasses = ['SideDrawer', 'Open']
    }
   
    return  <Aux> 
              
      <Backdrop show ={props.open} clicked= {props.closed} />  
            <div className = {attachedClasses.join(' ')}>
                    <Logo height='11%'/>
                   
                    
                <nav>
                    <NavigationItems clicked= {props.closed} />
                    
                </nav>
                <nav id="navbar" className="nav-menu navbar">
                            <ul>
                            <li onClick= {props.closed}><a href="#hero" className="nav-link scrollto active"  ><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li onClick= {props.closed}><a href="#about" className="nav-link scrollto" ><i className="bx bx-user"></i> <span>About</span></a></li>
                            <li onClick= {props.closed}><a href="#resume" className="nav-link scrollto" ><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li onClick= {props.closed}><a href="#portfolio" className="nav-link scrollto" ><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li onClick= {props.closed}><a href="#services" className="nav-link scrollto" ><i className="bx bx-server"></i> <span>Services</span></a></li>
                            <li onClick= {props.closed}><a href="#contact" className="nav-link scrollto" ><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                            </ul>
                        </nav>
                <button onClick={props.closed}>EXIT</button>
            </div>

          
        </Aux>
        }
    

export default sideDrawer;