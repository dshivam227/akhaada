import React from 'react'
import './Join.css'


const Join = () => {
    return (
        <div className="join" id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>Ready To</span>
                    <span> Level Up</span>
                </div>

                <div>
                    <span>Your Body</span>
                    <span className='stroke-text'> With Us?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className='email-container'>

                    <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join