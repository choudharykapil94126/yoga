import React from 'react'

const coaches = () => {
  return (
    <>
    <div className="coachesmain">
        <p className="coachesmainhead">Top Rated Coaches</p>
        <div className="coachesscroll">
            <div className="coachesscrollitem">
                <img src="./imgs/coach1.png" alt=""/>
                <p className="Uppercoach">Emma Dua</p>
                <p className="Lowercoach">Yoga Trainer</p>
            </div>
            <div className="coachesscrollitem">
                <img src="./imgs/coach2.png" alt="" />
                <p className="Uppercoach">Taylor Swift</p>
                <p className="Lowercoach">Fitness Coach</p>
            </div>
            <div className="coachesscrollitem">
                <img src="./imgs/Ellipse 16.png" alt="" />
                <p className="Uppercoach">Anna Julianne</p>
                <p className="Lowercoach">Health Coach</p>
            </div>
            <div className="coachesscrollitem">
                <img src="./imgs/coach4.png" alt="" />
                <p className="Uppercoach">Nancy Watts</p>
                <p className="Lowercoach">Mindfulness Coach</p>
            </div>
            <div className="coachesscrollitem">
                <img src="./imgs/coach5.png" alt="" />
                <p className="Uppercoach">Terry Oswald</p>
                <p className="Lowercoach">Health Coach</p>
            </div>
        </div>
    </div>
    <div className="linkedOne"></div>
    
    </>
  )
}

export default coaches;