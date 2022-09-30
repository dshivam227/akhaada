import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';



const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_foamno3', 'template_10tvaes', form.current, 'nsD0-mng80OmmUE6s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>Ready To</span>
                    <span>Level Up</span>
                </div>

                <div>
                    <span>Your Body</span>
                    <span className='stroke-text'> With Us?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" ref={form} className='email-container' onSubmit={sendEmail}>

                    <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join