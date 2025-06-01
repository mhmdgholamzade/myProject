import React from 'react';
import './CommentForm.css';



function CommentForm() {
  return (
    
    <div className="comment-form-container">
      <h2>Send Comment</h2>
      <form className="comment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Email" required />

        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" placeholder="Write Your Comment" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default CommentForm;
