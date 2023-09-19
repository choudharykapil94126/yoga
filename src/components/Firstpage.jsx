import React from 'react';


const Firstpage = () => {
  return (
    <>
    <div className="firstPageContainer">
        <div className="leftside">
              <img src="../imgs/Group 1171275105.jpg" alt="" width="139.885" height="127.285" />
              <p className="p1">Gateway to your</p>
              <p className="p2">Wellness, Health & Happiness</p>
              <button>TRY NOW</button>
        </div>
        <div className="middleImg">
            <img src="https://s3-alpha-sig.figma.com/img/01be/4037/c2cf21612627f83290d2675479af467c?Expires=1696204800&Signature=lFYGnVqA5LNi3N5xA0svPgTpR4x5sy78fsFI6J6ysJgYxw8UY6qdZOCnc~6tvKsfLk-rNhTFivqnFzWb-95pALu-ejtJ329yHeXgkdX7J46dRdbRJW-MnuwqsgiMhhY1ScYUeefzCCKCMbZaNyhbomKvgvQGg7x~J6VG32SiuRtyic4sB5fFbH1xpS2JE3kjK6ZxFfA0bA9UnBzN7DmQZsxd3wVSII0rJoac8cRhp0vruWc4qfvhRhjRmt7RiI6McEYQ3Va-yj24cFd8EH7MDHFiSGQySe6et~bAAP2w8sK2kq5tjK1Ui6xB6R854~4x5T2L9C~guazmmeX8squv9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width="600" height="500" />
        </div>
        <div className="rightside">
            <div className="rightmaindiv">
              <div><img src="../logo/commandsquare.png" width="" alt="" /></div>
              <div className="rightview">
                <p className="rightP1">Customized Plan</p>
                <p className="rightP2">Unique customized plan curated by Health Coach to improve overall health</p>
              </div>
            </div>
            <div className="rightmaindiv">
              <div><img src="../logo/usersquare.png" alt="" /></div>
              <div className="rightview">
                <p className="rightP1">Pro Instructors</p>
                <p className="rightP2">50+ Professional Coaches from across the world</p>
              </div>
            </div>
            <div className="rightmaindiv">
              <div><img src="../logo/note.png" width="" alt="" /></div>
              <div className="rightview">
                <p className="rightP1">Quality Content</p>
                <p className="rightP2">All our lessons, live sessions, camps & workshop are well panned by professional coaches </p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Firstpage