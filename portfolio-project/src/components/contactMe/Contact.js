import React, {  useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
export default function Contact() {
    const[data,setData]=useState({
        email:'',
        subject:'',
        message:''
    })
    const{email,subject,message}=data;
    const changeHandler=e=>{
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault();        
        emailjs.sendForm('service_zi00iob', 'template_100kjfk', e.target, 'zCNtqR4eTQZgX_RkZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setData('');
            e.target.reset();
            
    }
    return (
        <div className='contact-container' id='contact'>
            <div className='contact-info'>
                <h3>Contact Me</h3>
                <p>Need to get in touch with me ?</p>
                <p>Either fill out the form or click below social media icons </p>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a target={"_blank"} rel="noreferrer" href='https://m.facebook.com/100008971005305/'>
                            <i class="fa-brands  fa-facebook"></i>
                        </a>
                        <a target={"_blank"} rel="noreferrer" href='https://www.instagram.com/tsr_vicky/'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a target={"_blank"} rel="noreferrer" href='https://www.linkedin.com/in/tharugusrinivasulu'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a target={"_blank"} rel="noreferrer" href='https://www.snapchat.com/add/srinivasvicky21?share_id=ujDDZ3wYvxU&locale=en-GB'>
                            <i class="fa-brands fa-snapchat-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='contact-form'>
                <form onSubmit={submitHandler} autoComplete="off">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" required class="form-control" id="email" placeholder="Enter your email" name="email" value={email} onChange={changeHandler} />  
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject:</label>
                        <input type="text" required class="form-control" id="subject" placeholder="Enter subject" name="subject" value={subject} onChange={changeHandler} /> 
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea required class="form-control" rows="3" id="message" name='message' value={message} onChange={changeHandler}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary p-1 mb-3">Submit</button>
                </form>
            </div>

        </div>
    )
}