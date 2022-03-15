import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Button, Rating, TextField, Box } from '@mui/material';

function App() {
  const [rating, setRating] = React.useState(0);
  const [pseudo, setPseudo] = React.useState('');
  const [comment, setComment] = React.useState('');

  const handleClick = () => {
    console.log(`${pseudo} a noté ${rating}/5`);
  };


  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: 200 }}>
          <TextField
            id="standard-basic"
            label="Un pseudo ?"
            variant="standard"
            onChange={(event) => setPseudo(event.target.value)}
          />
      
          <TextField
            id="standard-basic"
            label="Un commentaire ?"
            variant="standard"
            onChange={(event) => setComment(event.target.value)}
          />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
          <Button variant="contained" onClick={handleClick} disabled={rating === 0 || pseudo === ''}>
            valider
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
