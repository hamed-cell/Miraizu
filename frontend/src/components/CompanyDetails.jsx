import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { companies } from '../data/companies';
import CommentsList from './CommentsList.jsx';
import CommentForm from './CommentForm.jsx';
import { Paper, Typography, Card, CardContent, Button, FormControlLabel, Checkbox, FormGroup, FormLabel, Box } from '@mui/material';

const getAverageScore = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(2);
};

const tagsOptions = ['Arab', 'Black', 'Asian', 'LGBT', 'Women'];

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === parseInt(id));
  const [comments, setComments] = useState(company ? company.comments : []);
  const [selectedTags, setSelectedTags] = useState(tagsOptions);
  const [sortOrder, setSortOrder] = useState('asc');

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleTagChange = (event) => {
    const value = event.target.name;
    setSelectedTags((prevTags) =>
      prevTags.includes(value) ? prevTags.filter((tag) => tag !== value) : [...prevTags, value]
    );
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (!company) {
    return <Typography variant="h6">Entreprise non trouvée</Typography>;
  }

  const filteredComments = selectedTags.length === 0 ? comments : comments.filter(comment => selectedTags.some(tag => comment.tags.includes(tag)));
  const sortedComments = filteredComments.sort((a, b) => sortOrder === 'asc' ? a.id - b.id : b.id - a.id);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>{company.name}</Typography>
      <Typography variant="body1" paragraph>{company.description}</Typography>
      <Typography variant="h6" gutterBottom>Score moyen: {getAverageScore(company.reviews)} / 5</Typography>
      {company.reviews.map((review, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="body1">
              {review.category}: <strong>{review.rating} / 5</strong>
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h6" gutterBottom>Commentaires</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
        <FormLabel component="legend">Filtrer par tags</FormLabel>
        <FormGroup row>
          {tagsOptions.map((tag) => (
            <FormControlLabel
              control={<Checkbox checked={selectedTags.includes(tag)} onChange={handleTagChange} name={tag} />}
              label={tag}
              key={tag}
            />
          ))}
        </FormGroup>
        <FormLabel component="legend">Trier par</FormLabel>
        <Box>
          <Button variant="contained" onClick={() => setSortOrder('asc')} sx={{ marginRight: 1 }}>Croissant</Button>
          <Button variant="contained" onClick={() => setSortOrder('desc')}>Décroissant</Button>
        </Box>
      </Box>
      {sortedComments.map((comment) => (
        <Card key={comment.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="body1">{comment.text}</Typography>
            <Typography variant="body2" color="textSecondary">
              Tags: {comment.tags.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <CommentForm companyId={company.id} addComment={addComment} />
      <Button component={Link} to="/" variant="contained" sx={{ marginTop: 2 }}>
        Retour à la liste
      </Button>
    </Paper>
  );
};

export default CompanyDetails;
