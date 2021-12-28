import { Button, Badge, Card } from '@mui/material';
import { useState } from "react";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { Counter } from './Counter';

export function Movie({ deletButton, name, poster, rating, summary }) {
  const styles = { color: rating >= 8.5 ? "green" : "red", fontSize: "18px" };
  const [show, setShow] = useState(false);
  const summaryStyle = { display: show ? "block" : "none" };
  return (
    <Card className='movie'>
      <img src={poster} alt="" className='movie-poster' />
      <h3 className='movie-name'>{name}</h3>
      <Counter />
      <div className='movie-specs'>
        <p className='movie-rating'>
          <Badge style={styles} badgeContent={rating} color="success"><StarPurple500Icon color="primary" /></Badge>
        </p>
        {deletButton}
      </div>
      <Button variant="text" onClick={() => setShow(!show)}>Summary</Button>
      {show ? <p style={summaryStyle} className='movie-summary'>{summary}</p> : ""}

    </Card>
  );
}
