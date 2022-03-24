import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
  setErrorMessage('Your email is invalid.');
} else {
  if (!e.target.value.length) {
  setErrorMessage(`${e.target.name} is required.`);
} else {
  setErrorMessage('');
}
}
console.log('errorMessage', errorMessage);
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  //console.log(formState);
  // JSX

  return (
    <section>
      <h2 className="xcenter">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <br></br>
        <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <br></br>
        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
      </div>
      {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
)}
      <button className="button is-medium is-primary is-fullwidth" type="submit">Submit</button>
      </form>
    </section>
  )
  }
  
  export default ContactForm;