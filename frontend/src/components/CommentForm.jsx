import React, { useState } from 'react';
import { TextField, Button, Box, FormControlLabel, Checkbox, FormGroup, FormLabel } from '@mui/material';

const tagsOptions = ['Arab', 'Black', 'Asian', 'LGBT', 'Women'];

const CommentForm = ({ companyId, addComment }) => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { id: Date.now(), text, tags };
    addComment(newComment);
    setText('');
    setTags([]);
  };

  const handleTagChange = (event) => {
    const value = event.target.name;
    setTags((prevTags) =>
      prevTags.includes(value) ? prevTags.filter((tag) => tag !== value) : [...prevTags, value]
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
      <TextField
        fullWidth
        label="Commentaire"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <FormLabel component="legend">Tags</FormLabel>
      <FormGroup row>
        {tagsOptions.map((tag) => (
          <FormControlLabel
            control={<Checkbox checked={tags.includes(tag)} onChange={handleTagChange} name={tag} />}
            label={tag}
            key={tag}
          />
        ))}
      </FormGroup>
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Ajouter Commentaire
      </Button>
    </Box>
  );
};

export default CommentForm;
