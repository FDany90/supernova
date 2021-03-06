export const Projects = (props) => {
  return (

    
    <section id="projects" className="about-area pt-110 pb-120">

    
          <div className="container">
              
              <div className="row justify-content-center">
                  
                <div className="col-lg-9">
                    <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        {/* <h2 className="welcome">WELCOME</h2> */}
                        <h1 className="title-white">PROJECTS</h1>
                    </div>
                  </div>
                  
              </div>
              
              {/* GAME ROOM */}
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="images/arcade.png" alt=""/>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h1 className="title-white">GAME ROOM</h1>
                        <ul className="about-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p className="text-white">Game room is a very simple Play to Earn project dedicated to retro gaming with the twist of a reward system based on the blockchain. The concept is simple. ¡Have fun playing classic games and get rewarded!</p>
                   
                        
                          <div className="row align-items-center about-counter pl-120 pt-20">
                            <div className="col-lg-4">
                              <a className="main-btn" data-scroll-nav="0" href="#pricing">Play Now</a> 
                            </div>
                          
                            <div className="col-lg-4">
                              <a className="main-btn" data-scroll-nav="0" href="https://supernova-studios.gitbook.io/gameroom/" target="_blank">Whitepaper</a> 
                            </div>
                        </div> 
                    </div> 
                </div>
              </div>
              

                {/* COMING SOON */}
              <div className="row align-items-center">
                
                  
                {/* <div className="col-lg-6">
                    <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h4 className="title">PROJECT W</h4>
                        <ul className="about-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p className="text">COMING SOON</p>
                        
                          <div className="about-counter pt-20">
                          <a className="main-btn" data-scroll-nav="0" href="#pricing">More Info</a>
                           
                        </div> 
                    </div> 
                  </div> */}
                  
                  {/* <div className="col-lg-6">
                    <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="images/arcade.png" alt=""/>
                    </div> 
                  </div> */}
            </div> 
        </div>
    </section>
    
   
    

  )
}
