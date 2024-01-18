import React, { useState } from 'react';
import "./Css/form.css";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.error('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name" required onChange={handleChange} />
                <input type="email" id="email" name="email" placeholder="Email" required onChange={handleChange} />
                <input type="text" id="subject" name="subject" placeholder="Subject" onChange={handleChange} />
                <textarea id="message" name="message" placeholder="Message" rows="4" onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
