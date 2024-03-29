import React,{ Component } from "react";
import Header from "../../components/Header/Header"
import Hello from "../../components/Hello/Hello";
import About from "../../components/About/About";
import axios from '../../axios'
import Aux from '../../hoc/Auxi/Auxilliary'
import withErrorHandler from '../../hoc/withErrorHAndler/withErrorHandler'

class BuggerBuilder extends Component{
  
    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading: false
    }
    componentDidMount(){
    }
    render(){
       
        return (
            <Aux>
               <div>
{/* <!-- ======= Mobile nav toggle button ======= --> */}
                   
<Header />

                {/* <!-- ======= Hero Section ======= --> */}
                <section id="hero" >
                     <Hello /> 
                </section>
                
                           
                {/* <!-- End Hero -- > */}

                    <main id="main">

{/* <!-- ======= About Section ======= --> */}
            <section id="about" >
                <About />
            </section>
{/* <!-- End About Section --> */}

{/* <!-- ======= Facts Section ======= --> */}
                        <section id="facts" className="facts">
                        <div className="container">

                            <div className="section-title">
                            <h2>Facts</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className="count-box">
                                <i className="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="count-box">
                                <i className="bi bi-people"></i>
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                </div>
                            </div>

                            </div>

                        </div>
                        </section>
    {/* <!-- End Facts Section --> */}
    {/* <!-- ======= Skills Section ======= --> */}
                        <section id="skills" className="skills section-bg">
                        <div className="container">

                            <div className="section-title">
                            <h2>Skills</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row skills-content">

                            <div className="col-lg-6" data-aos="fade-up">

                                <div className="progress">
                                <span className="skill">Node.js <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">React & Redux <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                <div className="progress">
                                <span className="skill">Java & Android <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">HTML5 <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">CSS3<i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                                <div className="progress">
                                <span className="skill">Photoshop<i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>

                            </div>

                            </div>

                        </div>
                        </section>
    {/* <!-- End Skills Section --> */}


    {/* <!-- ======= Resume Section ======= --> */}
                        <section id="resume" className="resume">
                        <div className="container">

                            <div className="section-title">
                            <h2>Resume</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                <h4>Alex Smith</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                <h5>2015 - 2016</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                                </div>
                                <div className="resume-item">
                                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                                <h5>2010 - 2014</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                <h4>Senior graphic design specialist</h4>
                                <h5>2019 - Present</h5>
                                <p><em>Experion, New York, NY </em></p>
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                                </div>
                                <div className="resume-item">
                                <h4>Graphic design specialist</h4>
                                <h5>2017 - 2018</h5>
                                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                <ul>
                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                </ul>
                                </div>
                            </div>
                            </div>

                        </div>
                        </section>
{/* <!-- End Resume Section --> */}

{/* <!-- ======= Portfolio Section ======= --> */}
                        <section id="portfolio" className="portfolio section-bg">
                        <div className="container">

                            <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                            </div>

                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                                </div>
                            </div>

                            </div>

                        </div>
                        </section>
    {/* <!-- End Portfolio Section --> */}

{/* <!-- ======= Services Section ======= --> */}
                        <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bi bi-briefcase"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="bi bi-binoculars"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                            </div>

                        </div>
                        </section>
{/* <!-- End Services Section --> */}

{/* <!-- ======= Testimonials Section ======= --> */}
                        <section id="testimonials" className="testimonials section-bg">
                        <div className="container">

                            <div className="section-title">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                                </div>
            {/* <!-- End testimonial item --> */}

                                <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                                </div>

            {/* <!-- End testimonial item --> */}
                    <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                                </div>
            {/* <!-- End testimonial item --> */}

                                <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                                </div>
            {/* <!-- End testimonial item --> */}

                                <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                    <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                                </div>
            {/* <!-- End testimonial item --> */}

                            </div>
                            <div className="swiper-pagination"></div>
                            </div>

                        </div>
                        
                        </section>
            {/* <!-- End Testimonials Section --> */}

{/* <!-- ======= Contact Section ======= --> */}
                        <section id="contact" className="contact">
                        <div className="container">

                            <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row" data-aos="fade-in">

                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p> Kigali, Rwanda</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>izerefaifelix@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+250785182823</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:'0', width: '100%', height: '290px'}} allowfullscreen></iframe>
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required/>
                                </div>
                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                            </div>

                        </div>
                        </section>
                        
{/* <!-- End Contact Section --> */}
{/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>IZERE Ange Felix</span></strong>
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. --> */}
        {/* <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
        Designed by <a href="https://www.github.com/Angelus123">Izere Ange Felix</a>
      </div>
    </div>
  </footer>
  {/* <!-- End  Footer --> */}

                    
                    </main>
            </div> 
            </Aux>
        )
    }
}
export default withErrorHandler(BuggerBuilder,axios)