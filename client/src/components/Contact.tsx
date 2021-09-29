import React, { CSSProperties, useState } from 'react';
import styles from '../styles/css/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// const emailjs = require('emailjs-com');

interface Props {}

function Contact(props: Props) {
    const {} = props;
    const [wasSubmitSuccessful, setWasSubmitSuccessful] = useState<boolean>(false);
    const [wasFormSubmitted, setWasFormSubmitted] = useState<boolean>(false);
    const contactNumber = "+447514632300";
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
//       .then((result) => {
//           console.log(result.text);
//           setWasSubmitSuccessful(true);
//       }, (error) => {
//           console.log(error.text);
//           setWasSubmitSuccessful(false);
//       })
//       .then(() => setWasFormSubmitted(true));
//   }

  const inlineSubmitMsgStyle: CSSProperties = {
    visibility: wasFormSubmitted ? "visible" : "hidden",
    color: wasSubmitSuccessful ? "green" : "red",
    height: wasFormSubmitted ? "auto" : "0px",
  };

  const inlineSubmitMsg = wasSubmitSuccessful ? 
  "Thank you for submitting your enquiry, we will reply as soon as we are able" :
  "Unfortunately something went wrong when submitting your enquiry, please try again or call us directly on " + contactNumber;

    return (
        <section id="contact">
            <h1 className={styles.sectionTitle}>Contact Me</h1>
            <div className={styles.contactSectionContainer}>
                <h3>
                    If you're interested in talking to me about my work, please either get in contact with me directly, or leave me a message using the contact form below.
                </h3>
                <div className={styles.contactOptions}>
                    <div className={styles.contactLine}><FontAwesomeIcon icon={faPhone} style={{color: "lightgreen"}}/><span>&nbsp;&nbsp;{contactNumber}</span></div>
                    <div className={styles.contactLine}><FontAwesomeIcon icon={faEnvelope} style={{color: "beige"}}/><span>&nbsp;&nbsp;{"t.hayton37@gmail.com"}</span></div>
                </div>
                <form action="submit" className={styles.contactForm}>
                    <div>
                        <label htmlFor="" className={styles.requiredFormField}>Name </label>
                        <input type="text" name="name_field" placeholder="Please Enter Your Name" required/>
                    </div>
                    <div>
                        <label htmlFor="" className={styles.requiredFormField}>Phone </label>
                        <input type="text" name="phone_field" placeholder="e.g. +447123456789" required/>
                    </div>
                    <div>
                        <label htmlFor="" className={styles.requiredFormField}>Email </label>
                        <input type="email" name="email_field" placeholder="e.g. email@address.com" required/>
                    </div>
                    <textarea name="message_field" id="message" rows={10} placeholder="Send me a message..." ></textarea>
                    <button className={`${styles.formSubmitBtn} ${styles.buttonSuccess}`}>Submit</button>
                    <div className={styles.confirmationLine} style={inlineSubmitMsgStyle}>{inlineSubmitMsg}</div>
                </form>
            </div>
         </section>
    );
};

export default Contact;
