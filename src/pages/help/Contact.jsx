/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData()
  console.log(data)

    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <Form method="POST" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          {data && data.message && <p className="message">{data.message}</p>}
          <button className="submit" type="submit">Submit</button>
        </Form>
      </div>
    )
  }

export async function contactAction ({ request }) {
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  if(submission.message.length < 10) {
    return {
      message: 'Your message must be at least 10 characters long',
      status: 400
    }
  }

  console.log(submission)
  return redirect('/')
}