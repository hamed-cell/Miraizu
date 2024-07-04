import React from "react";
import "../App.css";

function CommentsList({ comments = [] }) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <p>{comment.text}</p>
          <p>Tags: {comment.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
