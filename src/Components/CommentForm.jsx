
import React, { useState } from 'react';
import useCommentSubmit from './useCommentSubmit';
import './CommentForm.css';

function CommentForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const { submitComment, loading, error } = useCommentSubmit();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitComment(formData);
    if (result) {
      onSuccess?.(result);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div className="comment-form-container">
      <h2>Send Comment </h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? 'posting...' : 'Send'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default CommentForm;
