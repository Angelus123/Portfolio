import React from'react'
import './Hello.css'
import Aux from '../../hoc/Auxi/Auxilliary'
const hello = (props) =>{
  //This could be functional component ,it doesn't have to be class component

    return (
      <Aux>
{/* <!-- ======= Hero Section ======= --> */}
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div  className ="hello">
                        <h1 >IZERE Ange Felix</h1>
                        <p >I'm "Designer, Developer, and Freelancer"</p>
                    </div>
                    </section>
{/* <!-- End Hero -- ggg> */}
   </Aux>)
    
  }


export default hello