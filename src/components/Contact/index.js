import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// contact component
function Contact () {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const { name, email, message } = formState;
  
  // handleChange function
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }

    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } 

  };
  
  // handleNull function
  function handleNull(e) {
    if (e.target.name === 'name' || e.target.name === 'message' ) {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } 
  }
  
  //console.log(formState);

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form', formState);
      setFormState({name: '', email: '', message: ''});
    }
  };

  return (
    <section className='contact'>
    <h1 data-testid="h1tag" >Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input className='form-input' type="text" defaultValue={name}   onBlur={handleNull} name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input className='form-input' type="email" DefaultValue={email} onBlur={handleChange} name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue={message}  onBlur={handleNull} rows="5" />
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button data-testid="button"  className='btn-sm' type="submit">Submit</button>
    </form>
  </section>
  );
}

export default Contact;