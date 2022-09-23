import React from 'react'
import Header from './Header/Header'
import './Hero.css'


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                {/* the best ad  start*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Fitness Club in the Town</span>
                </div>
                {/* hero heading */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            IN HERE WE WILL HELP
                            YOU TO SHAPE AND
                            BUILD YOUR IDEAL BODY
                            AND LIVE UP YOUR LIFE
                            TO FULLEST
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                        </div>
                        <div>
                        <span>+978</span>
                        <span>members joined</span>
                        </div>
                        <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                        </div>
                </div>

                {/* hero buttton */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>
            <div className="right-h">Right Side</div>
        </div>
    )
}

export default Hero