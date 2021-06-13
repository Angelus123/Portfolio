import React from 'react'
import profile from  '../../../assets/img/profile/profileog.png'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './toolbar.css'
const toolbar = (props) => {
  console.log(props.open)
    return <header className="Toolbar">
       <DrawToggle clicked ={props.toggle} />
        <div className="profile">
                                {/* <img src={profile} alt="" className="img-fluid rounded-circle" classname="profile-wid" /> */}
                   </div>
        <nav className="DesktopOnly">
          <div><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></div>
          <div><a href="#skills" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Skills</span></a></div>

        </nav>
    </header>
}
export default toolbar