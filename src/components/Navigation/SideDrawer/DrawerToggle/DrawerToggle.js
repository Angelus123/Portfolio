import React from 'react'
import './DrawerToggle.css'
const drawToggle = (props) => (
    // <div className="DrawerToggle" onClick = {props.clicked}>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    // </div>
    // {/* <!-- ======= Mobile nav toggle button ======= --> */}
                  

      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick = {props.clicked}></i>
)
export default drawToggle
 
