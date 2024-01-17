import React from 'react';
import "./Css/form.css"

function Form() {
    return (
        <div className='form-container'>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
            <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
        </div>
    );
}

export default Form;
