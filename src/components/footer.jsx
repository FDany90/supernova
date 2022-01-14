export const Footer = (props) => {
  return (

    
    <footer id="footer" className="footer-area bg_cover footer-bg " >
        {/* <div className="footer-shape">
            <img src="images/shape/footer-shape.png" alt="footer shape"/>
        </div>  */}
        <div className="container text-center">
            <div className="footer-widget  ">
                  <div className="row footer-center ">
                      
                    <div className="col-lg-4 col-sm-6 order-sm-1 order-lg-1">
                        <div className="footer-about pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.3s">
                            <a href="#">
                                <img src="images/logowhite2.png" alt="Logo"/>
                            </a>
                           
                        </div> 
                    </div>
                   
                    <div className="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
                        <div className="footer-contact pt-40 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.9s">
                            <div className="footer-title">
                                <h5 className="title">Contact Us</h5>
                            </div>
                            <div className="contact pt-10">
                                <p className="text">supernova.studios.ar@gmail.com</p>

                                <div className='social'>
                                    <ul>
                                    <li>
                                        <a href='https://discord.gg/DzsFyGmQkh' target="_blank">
                                        <i className='fab fa-discord'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://twitter.com/SuperNovaOnTwit' target="_blank">
                                        <i className='fab fa-twitter'></i>
                                        </a>
                                    </li>
                                    
                                    {/* <li>
                                        <a href={props.data ? props.data.youtube : '/'}>
                                        <i className='fab fa-youtube'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.youtube : '/'}>
                                        <i className='fab fa-telegram'></i>
                                        </a>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div> 
                      </div>
                      

                </div> 
            </div> 
            <div className="footer-copyright text-center">
                <p className="text">© 2022  <a href="https://uideck.com" rel="nofollow">Supernova</a> All Rights Reserved.</p>
            </div>
        </div> 
    </footer>

  )
}
