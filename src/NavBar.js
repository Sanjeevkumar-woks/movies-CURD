import { Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import { Link } from "react-router-dom";

export function NavBar({ button }) {
  return (
    <aside className="sidebar">
      <nav className="nav">
        {/* <Button className='navbrand' variant="outlined"><TheatersOutlinedIcon/>My-Movies</Button> */}

        <ul>
          <li>{button}</li>
          <li><Button variant="outlined"><Link to="/"><HomeOutlinedIcon className='super' /><sup>Home</sup></Link></Button></li>
          <li><Button variant="outlined"><Link to="/movies"><LocalMoviesOutlinedIcon className='super' /><sup>Collection</sup></Link></Button></li>
          <li><Button variant="outlined"><Link to="/add/movies"><AddCircleOutlineOutlinedIcon className='super' /><sup>Add</sup></Link></Button></li>
         
          <li><Button variant="outlined"><Link to="/games"><SportsEsportsIcon className='super' /><sup>Games</sup></Link></Button></li>
        </ul>
      </nav>
    </aside>
  );
}
