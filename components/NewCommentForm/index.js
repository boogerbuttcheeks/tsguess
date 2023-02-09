import { useState } from "react";

export default function NewPostForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, comment });
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="comment">Comment</label>
        <input type="text" name="comment" id="comment" value={comment} onChange={handleCommentChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}