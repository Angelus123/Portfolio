import React, {Component}from 'react'

import './assets/css/style.css'
//   <!-- Vendor CSS Files -->
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import Layout from './hoc/Layout/Layout'
import Main from './containers/Main/Main'
import {Redirect, Route, Switch} from 'react-router-dom'
  
//   <!-- Vendor JS Files -->
// import aos from "./assets/vendor/aos/aos.js"
// import "assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
// import "assets/vendor/glightbox/js/glightbox.min.js"
// import "assets/vendor/isotope-layout/isotope.pkgd.min.js"
// import "assets/vendor/php-email-form/validate.js"
// import "assets/vendor/purecounter/purecounter.js"
// import "assets/vendor/swiper/swiper-bundle.min.js"
// import "assets/vendor/typed.js/typed.min.js"
// import "assets/vendor/waypoints/noframework.waypoints.js"

//   <!-- Template Main JS File -->
// import "assets/js/main.js"
class App extends Component {
   
    render () {
     
        return(
        <div>
       
                <Layout>
                    <Switch>
                       
                        <Route path="/home" exact component ={Main} />
                        <Redirect from ="/" to="home" />
                    </Switch>
                 
                </Layout>
        
        </div>
     )
    }
}
export default App
