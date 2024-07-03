import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CommentsList = ({ comments = [] }) => {
  return (
    <Box>
      {comments.map((comment) => (
        <Card key={comment.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="body1">{comment.text}</Typography>
            <Typography variant="body2" color="textSecondary">
              Tags: {comment.tags.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CommentsList;
