import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  const { push } = useHistory();



  const deleteItem = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log(res);
        push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className='movie-director' >
        Director: <em >{director}</em>
      </div>
      <div className='movie-metascore' style={{color:'black', borderRadius:'1.5rem', border:'solid black', padding:'.5rem'}}>
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3 style={{color:'black'}}>-Actors-</h3>

      {stars.map(star => (
        <div key={star} className='movie-star' style={{color:'black'}}>
          {star}
        </div>
      ))}
      <button onClick={() => push(`/update-movie/${id}`)}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default MovieCard;