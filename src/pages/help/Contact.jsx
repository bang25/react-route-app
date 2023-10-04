import { Form } from "react-router-dom";

export default function Contact() {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <Form>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
        </Form>
      </div>
    )
  }