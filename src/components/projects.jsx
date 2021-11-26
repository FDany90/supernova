export const Projects = (props) => {
  return (

    
    <section id="projects" className="about-area pt-110 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        {/* <h2 className="welcome">WELCOME</h2> */}
                        <h2 className="title">PROJECTS</h2>
                    </div>
                </div>
            </div> 
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="images/about.jpg" alt=""/>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h4 className="title">GAME ROOM</h4>
                        <ul className="about-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p className="text">Game room is a Play to Earn project dedicated to retro gaming with the twist of a reward system based on the blockchain. The concept is simple. ¡Have fun playing classic games and get rewarded!</p>
                        
                          <div className="about-counter pt-20">
                          <a className="main-btn" data-scroll-nav="0" href="#pricing">Play</a>
                           
                        </div> 
                    </div> 
                </div>
            </div> 
        </div>
    </section>
    
   
    

  )
}
