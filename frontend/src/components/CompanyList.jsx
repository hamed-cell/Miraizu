import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companies as companiesData } from '../data/companies';
import SearchBar from './SearchBar';
import '../App.css';

const getAverageScore = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(2);
};

const CompanyList = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortCategory, setSortCategory] = useState('average');
  const [filteredCompanies, setFilteredCompanies] = useState(companiesData);

  useEffect(() => {
    const sortedCompanies = [...filteredCompanies].sort((a, b) => {
      let avgA, avgB;
      if (sortCategory === 'average') {
        avgA = parseFloat(getAverageScore(a.reviews));
        avgB = parseFloat(getAverageScore(b.reviews));
      } else {
        avgA = a.reviews.find(review => review.category === sortCategory)?.rating || 0;
        avgB = b.reviews.find(review => review.category === sortCategory)?.rating || 0;
      }
      return sortOrder === 'asc' ? avgA - avgB : avgB - avgA;
    });
    setFilteredCompanies(sortedCompanies);
  }, [sortOrder, sortCategory, filteredCompanies]);

  return (
    <div className="paper">
      <h2>Liste des entreprises</h2>
      <SearchBar companies={companiesData} setFilteredCompanies={setFilteredCompanies} />
      <div className="form-group">
        <div className="form-control">
          <label>Trier par</label>
          <select value={sortCategory} onChange={(e) => setSortCategory(e.target.value)}>
            <option value="average">Score moyen</option>
            <option value="Arab">Arab</option>
            <option value="Black">Black</option>
            <option value="Asian">Asian</option>
            <option value="LGBT Friendly">LGBT Friendly</option>
            <option value="Women Friendly">Women Friendly</option>
          </select>
        </div>
        <div>
          <button className="button" onClick={() => setSortOrder('asc')}>Croissant</button>
          <button className="button" onClick={() => setSortOrder('desc')}>Décroissant</button>
        </div>
      </div>
      <div>
        {filteredCompanies.map((company) => (
          <div key={company.id} className="card">
            <Link to={`/company/${company.id}`}>
              <h2>{company.name}</h2>
              <p>Score moyen: {getAverageScore(company.reviews)} / 5</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
