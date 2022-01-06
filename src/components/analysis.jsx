import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Analysis = (props) => {
  return (

      <section class="analysis-area analysis-bg pt-115 pb-120 bg_cover" >
                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Supernova Launching</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p>Website launch</p>
          <p> Social networks</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Gameroom Design</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          <p> Whitepaper publication </p>
          <p>Website launch</p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Gameroom Free2Play</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <p>
    First game launch
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Blockchain Integration</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
    Wallet Log-In Ranking System
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">GameRoom Play2Earn</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Smart Contract Reward System</h4> */}
    <p>
    Smart Contract Reward System
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Gameroom NFT</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
    <p> New NFT System</p>
    <p> New Games Added</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Supernova Tokenomics</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
    <p>
    Economic System, Airdrop, Market Release
    </p>
  </VerticalTimelineElement>
          </VerticalTimeline>

          {/*    
          <div class="container">
              

    
          
              
           
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="analysis-title text-center pb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h3 class="title">Learn More About Us In Stats</h3>
                    </div> 
                </div>
            </div> 
            <div class="analysis-counter">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                            <span class="count"><span class="counter">1720</span><span class="plus">+</span></span>
                            <p class="text">Projects Done</p>
                        </div> 
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <span class="count"><span class="counter">98</span><span class="plus">%</span></span>
                            <p class="text">Client Satisfaction</p>
                        </div> 
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                            <span class="count"><span class="counter">30</span><span class="plus">+</span></span>
                            <p class="text">Employee</p>
                        </div> 
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="single-analysis-counter mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                            <span class="count"><span class="counter">9970</span><span class="plus">+</span></span>
                            <p class="text">Coffee Consumed</p>
                        </div> 
                    </div>
                </div> 
            </div>  
        </div> */}
      
    </section>


  )
}
