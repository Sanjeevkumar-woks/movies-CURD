import { Button, Badge, IconButton } from '@mui/material';
import { useState } from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';


export function Counter() {
  const [like, setLike] = useState(5);
  const [disLike, setDisLike] = useState(2);
  return (
    <div className='like-dislike'>
      {/* <button className="like" onClick={() => setLike(like + 1)}>
                    <span>👍</span>
                    {like}
                  </button>
                  <button className="dislike" onClick={() => setDisLike(disLike + 1)}>
                    <span>👎</span>
                    {disLike}
                  </button> */}

      <Badge badgeContent={like} color="warning">
        <IconButton aria-label="delete" color="primary" onClick={() => setLike(like + 1)}>
          <ThumbUpOutlinedIcon />
        </IconButton>
      </Badge>
      <Button size="small">Watch</Button>
      <Badge badgeContent={disLike} color="error">
        <IconButton aria-label="dislike" color="error" onClick={() => setDisLike(disLike + 1)}>
          <ThumbDownOffAltOutlinedIcon />
        </IconButton>
      </Badge>
      {/* <Badge badgeContent={like} color="warning">
              <Button onClick={() => setLike(like + 1)}>👍</Button>
              </Badge>
              <Badge badgeContent={disLike} color="warning">
              <Button onClick={() => setDisLike(disLike + 1)}>👎</Button>
              </Badge> */}

    </div>
  );
}
