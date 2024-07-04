import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import { companies } from "../data/companies";

const getAverageScore = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(2);
};

function CompanyList() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCategory, setSortCategory] = useState("average");

  const sortedCompanies = [...companies].sort((a, b) => {
    let avgA;
    let avgB;
    if (sortCategory === "average") {
      avgA = parseFloat(getAverageScore(a.reviews));
      avgB = parseFloat(getAverageScore(b.reviews));
    } else {
      avgA =
        a.reviews.find((review) => review.category === sortCategory)?.rating ||
        0;
      avgB =
        b.reviews.find((review) => review.category === sortCategory)?.rating ||
        0;
    }
    return sortOrder === "asc" ? avgA - avgB : avgB - avgA;
  });

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Liste des entreprises
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Trier par</InputLabel>
          <Select
            value={sortCategory}
            onChange={(e) => setSortCategory(e.target.value)}
          >
            <MenuItem value="average">Score moyen</MenuItem>
            <MenuItem value="Arab">Arab</MenuItem>
            <MenuItem value="Black">Black</MenuItem>
            <MenuItem value="Asian">Asian</MenuItem>
            <MenuItem value="LGBT Friendly">LGBT Friendly</MenuItem>
            <MenuItem value="Women Friendly">Women Friendly</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <Button
            variant="contained"
            onClick={() => setSortOrder("asc")}
            sx={{ marginRight: 1 }}
          >
            Croissant
          </Button>
          <Button variant="contained" onClick={() => setSortOrder("desc")}>
            Décroissant
          </Button>
        </Box>
      </Box>
      <List>
        {sortedCompanies.map((company) => (
          <Card key={company.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <ListItem button component={Link} to={`/company/${company.id}`}>
                <ListItemText
                  primary={company.name}
                  secondary={`Score moyen: ${getAverageScore(
                    company.reviews
                  )} / 5`}
                />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Paper>
  );
}

export default CompanyList;
