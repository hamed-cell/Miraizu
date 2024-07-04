import React, { useState } from "react";
import "../App.css";

const tagsOptions = ["Arab", "Black", "Asian", "LGBT", "Women"];

function CommentForm({ companyId, addComment }) {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { id: Date.now(), text, tags };
    addComment(newComment);
    setText("");
    setTags([]);
  };

  const handleTagChange = (event) => {
    const value = event.target.name;
    setTags((prevTags) =>
      prevTags.includes(value)
        ? prevTags.filter((tag) => tag !== value)
        : [...prevTags, value]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <label>Commentaire</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        rows={4}
      />
      <label>Tags</label>
      <div className="checkbox-group">
        {tagsOptions.map((tag) => (
          <label key={tag}>
            <input
              type="checkbox"
              checked={tags.includes(tag)}
              onChange={handleTagChange}
              name={tag}
            />
            {tag}
          </label>
        ))}
      </div>
      <button type="submit" className="button">
        Ajouter Commentaire
      </button>
    </form>
  );
}

export default CommentForm;
