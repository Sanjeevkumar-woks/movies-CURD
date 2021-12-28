import { Button } from '@mui/material';
import { useState } from "react";
import { useHistory} from "react-router-dom";

export function AddMovies({ movieList, setMovieList }) {
  const history=useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="add-movie">
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Movie Name" />
      <input
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Img Url" />
      <input
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Movie Ratings" />
      <br />
      <Button
        className="add-btn"
        variant="outlined"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating
          };
          setMovieList([...movieList, newMovie]);
          history.push("/movies")
        }}
      >
        Add-Movie
      </Button>
    </div>
  );
}
