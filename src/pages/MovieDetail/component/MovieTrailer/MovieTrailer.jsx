import React from 'react';
import YouTube from 'react-youtube';

const MovieTrailer = ( {video} ) => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
        },
        };
  return (
    <div style={{height: '100%'}}>
        <YouTube
            videoId={video && video[0]?.key}
            style={{ height: '100%' }}
            opts={opts}
            onReady={(event) => event.target.mute()}
        />
    </div>
  )
  
}

export default MovieTrailer


