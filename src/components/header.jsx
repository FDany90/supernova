

export const Header = (props) => {
  return (

    
<header className="header-area">
    <div className="navbar-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logowhite3.png" alt="Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <a className="page-scroll nav-menu-item nav-menu-text" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#footer">Contact</a>
                                </li>
                                
                                
                            </ul>
                        </div> 
                        
                       
                        <div className="navbar-btn d-none d-sm-inline-block">
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
    </div> 
    
    
          
    <div id="home" className="header-hero header-bg bg_cover d-lg-flex align-items-center" >
   
    {/* <div id="home" className="header-hero  d-lg-flex align-items-center" > */}
        <div className="container ">
            <div className="row">
                <div className="col-lg-8">
                    <div className="header-hero-content">
                        <h4 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">A massive amount of energy pushing for the creation of something new</h4>
                        {/* <h4 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">for the creation of something new</h4> */}
                        <h1 className="supernova-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">SUPERNOVA</h1>
                        {/* <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Please, purchase full version of the template to get all sections, features and commercial license</p> */}
                        <div className="header-play know-more wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <a className="page-scroll play-btn" href="#about">Know more</a>
                        </div>
                    </div> 
                </div>
            </div> 
              </div> 
              
        {/* <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
            <div className="image">
                <img src="images/hero-image.png" alt="Hero Image"/>
            </div>
        </div>  */}

              
        {/* <div className="header-shape">
            <img src="images/shape/header-shape.png" alt="shape"/>
        </div> */}
    </div> 
</header>

  )
}
