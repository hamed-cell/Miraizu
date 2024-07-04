import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { companies } from "../data/companies";
import CommentsList from "./CommentsList.jsx";
import CommentForm from "./CommentForm.jsx";
import "../App.css";

const getAverageScore = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(2);
};

const tagsOptions = ["Arab", "Black", "Asian", "LGBT", "Women"];

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === parseInt(id));
  const [comments, setComments] = useState(company ? company.comments : []);
  const [selectedTags, setSelectedTags] = useState(tagsOptions);
  const [sortOrder, setSortOrder] = useState("asc");

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleTagChange = (event) => {
    const value = event.target.name;
    setSelectedTags((prevTags) =>
      prevTags.includes(value)
        ? prevTags.filter((tag) => tag !== value)
        : [...prevTags, value]
    );
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (!company) {
    return <h2>Entreprise non trouvée</h2>;
  }

  const filteredComments =
    selectedTags.length === 0
      ? comments
      : comments.filter((comment) =>
          selectedTags.some((tag) => comment.tags.includes(tag))
        );
  const sortedComments = filteredComments.sort((a, b) =>
    sortOrder === "asc" ? a.id - b.id : b.id - a.id
  );

  return (
    <div className="paper">
      <img className="logoEntreprise" src={company.logo} alt="" />
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <h3>Score moyen: {getAverageScore(company.reviews)} / 5</h3>
      {company.reviews.map((review, index) => (
        <div key={index} className="card">
          <p>
            {review.category}: <strong>{review.rating} / 5</strong>
          </p>
        </div>
      ))}
      <h3>Commentaires</h3>
      <div className="form-group">
        <div className="checkbox-group">
          <label>Filtrer par tags</label>
          {tagsOptions.map((tag) => (
            <label key={tag}>
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={handleTagChange}
                name={tag}
              />
              {tag}
            </label>
          ))}
        </div>
        <div>
          <button className="button" onClick={() => setSortOrder("asc")}>
            Croissant
          </button>
          <button className="button" onClick={() => setSortOrder("desc")}>
            Décroissant
          </button>
        </div>
      </div>
      {sortedComments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <p>{comment.text}</p>
          <p>Tags: {comment.tags.join(", ")}</p>
        </div>
      ))}
      <CommentForm companyId={company.id} addComment={addComment} />
      <button className="button" component={Link} to="/">
        Retour à la liste
      </button>
    </div>
  );
};

export default CompanyDetails;
