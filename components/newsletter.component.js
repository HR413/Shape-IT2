import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const myForm = useRef();

    const handleSendEmail = (e) => {
        e.preventDefault();
        
        emailjs
          .sendForm('service_jszoi0o', 'template_z98docg', myForm?.current, {
            publicKey: 'LWVU0dXbhuToT4nps',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
    }

    return (
        <>
            <h2 className='section-header' style={{ backgroundColor: "#1F2125", textAlign: "center", color: "white", paddingRight: "30px", paddingBottom: "20px" }}>Newsletter</h2>
            <div className='newsletter-container'>
                <form onSubmit={handleSendEmail} ref={myForm}>
                    <input type="email" name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email address' />
                    <button type='submit' className='btn'>Contact</button>
                </form>
            </div>
        </>
    )
}
