export const Header = (props) => {
  return (

    
<header className="header-area">
    <div className="navbar-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <a className="page-scroll" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#testimonial">Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#blog">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul> 
                                </li>
                            </ul>
                        </div> 
                        
                        <div className="navbar-btn d-none d-sm-inline-block">
                            <a className="main-btn" data-scroll-nav="0" href="#pricing">Download</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
    </div> 
    
    <div id="home" className="header-hero header-bg bg_cover d-lg-flex align-items-center" >
        <div className="container ">
            <div className="row">
                <div className="col-lg-6">
                    <div className="header-hero-content">
                        <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">You are using free lite version of Explore</h1>
                        <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Please, purchase full version of the template to get all sections, features and commercial license</p>
                        <div className="header-play wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <a className="play-btn" href="https://rebrand.ly/explore-ud">Purchase Now <i className="lni-cart-full"></i></a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
        <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
            <div className="image">
                <img src="images/hero-image.png" alt="Hero Image"/>
            </div>
        </div> 

        <div className="header-shape">
            <img src="images/shape/header-shape.png" alt="shape"/>
        </div>
    </div> 
</header>

  )
}
