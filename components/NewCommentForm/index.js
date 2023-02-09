import { useState } from "react";
import styles from "./NewCommentForm.module.css";

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
      <form className={styles.form} onSubmit={handleSubmit} method="POST">
        <span className={styles.nameWrapper}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.name}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </span>

        <span>
          <label htmlFor="comment">Comment</label>
          <textarea className={styles.comment} type="text" name="comment" id="comment" value={comment} onChange={handleCommentChange} />
        </span>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}