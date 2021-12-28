import { Button } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { Movie } from './Movie';
import { useEffect, useState } from "react";

export function MovieList() {
  const get=()=>{
    fetch("https://61c41708f1af4a0017d992ac.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvi)=>setMovieList(mvi))
  }
  const del=(id)=>{
    fetch(`https://61c41708f1af4a0017d992ac.mockapi.io/movies/${id}`,{ method:'DELETE',}).then((data)=>data.json()).then(()=>get());
  }
  const [movieList,setMovieList]=useState([]);
   
   useEffect(get,[]);
  return (
    <div className='movie-container'>
      {movieList.map(({ name, poster, rating, summary,id }, index) => <Movie deletButton={<Button className='delete' color='error'
        onClick={() =>del(id) 
          // const deleteIndex = index;
          // const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
          // setMovieList(remainingMovies);
          
        }><DeleteForeverTwoToneIcon /></Button>}
        name={name} poster={poster} rating={rating} summary={summary} />)}
    </div>
  );
}
