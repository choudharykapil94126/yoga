import React from 'react'

const Aboutus = () => {
  return (
    <>
    <div className="aboutmain">
        <p className="aboutmainhead">About us</p>
        <p className="aboutmaincont">Gateway To Your Wellness, Health & Happiness</p>
        <div className="aboutinner">
            <div className="leftabout">
                <p className="aboutinnerhead">Our Mission</p>
                <p className="aboutinnercont">Empower individuals to take control of their well-being and lead healthier lives. We strive to provide a comprehensive platform that promotes physical, mental, and emotional wellness.</p>
            </div>
            <div className="middleabout">
                <img src="../imgs/yogawomen.png" alt="" />
            </div>
            <div className="rightabout">
                <p className="aboutinnerhead">Community Support</p>
                <p className="aboutinnercont">We believe in a holistic approach to wellness, understanding that true well-being encompasses various aspects of one's life. Our app integrates fitness, nutrition, mindfulness, and personal development to support users in achieving a balanced and fulfilling lifestyle.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus