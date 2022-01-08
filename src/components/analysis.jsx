import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Analysis = (props) => {
  return (

    <section id="roadmap"  class="analysis-area analysis-bg pt-115 pb-120 bg_cover" >
      
      <div className="row justify-content-center">
                  
                <div className="col-lg-9">
                    <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        {/* <h2 className="welcome">WELCOME</h2> */}
                        <h1 className="title">ROADMAP</h1>
                    </div>
                  </div>
                  
      </div>
      
                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">SUPERNOVA LAUNCHING</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p className="vertical-timeline-element-subtitle">Website launch</p>
          <p className="vertical-timeline-element-subtitle"> Social networks</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> GAMEROOM DESIGN</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          <p className="vertical-timeline-element-subtitle"> Whitepaper publication </p>
          <p className="vertical-timeline-element-subtitle">Website launch</p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">GAMEROOM FREE 2 PLAY</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <p className="vertical-timeline-element-subtitle">
    First game launch
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"> BLOCKCHAIN INTEGRATION</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p className="vertical-timeline-element-subtitle">
    Wallet Log-In Ranking System
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">GAMEROOM PLAY 2 EARN</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Smart Contract Reward System</h4> */}
    <p className="vertical-timeline-element-subtitle">
    Smart Contract Reward System
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title"> GAMEROOM NFT</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
    <p className="vertical-timeline-element-subtitle"> New NFT System</p>
    <p className="vertical-timeline-element-subtitle"> New Games Added</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title"> SUPERNOVA</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
    <p className="vertical-timeline-element-subtitle">
    Economic System, Airdrop, Market Release
    </p>
  </VerticalTimelineElement>
          </VerticalTimeline>

          <div class="app-shape-4">
              <img src="images/shape/circle-shape-3.png" alt="shape"/>

          </div> 
      
          <div class="app-shape-3">
            <img src="images/shape/triangle-shape-3.png" alt="shape"/>
            </div> 
    </section>


  )
}
