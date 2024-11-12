import { useRef } from "react";
import emailjs from '@emailjs/browser';
export function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return(
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <input type="text" name="user_name" placeholder="Full Name" />
        <input type="text" name="email" placeholder="Email" required/>
      </div>
      <div>
        <input type="text" name="phone_number" placeholder="Phone Number" />
        <input type="text" name="subject" placeholder="subject" />
      </div>
      <textarea name="message" placeholder="Your Message" />
      <input type="submit" value="send" />
    </form>
  )
}