import React from 'react';
import moment from 'moment';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';


const Movie = (props) => {
  let {title, tagline, overview, poster_path, release_date} = props;
  let imgPath = poster_path ? `${IMAGE_PATH}${poster_path}` : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=no%20image&w=200&h=200';

  return (
    <div>
      <div className="media-object stack-for-small movie">
        <div className="media-object-section text-center">
          <div className="thumbnail">
            <img src={imgPath}/>
          </div>
        </div>
        <div className="media-object-section">
          <h4>{title} <small>{moment(release_date).format('YYYY')}</small></h4>
          <blockquote>{tagline}</blockquote>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
