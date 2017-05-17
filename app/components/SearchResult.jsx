import React from 'react';
import {Link} from 'react-router';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';


const SearchResult = ({id, posterPath, rating, title}) => {
  let imgPath = posterPath ? `${IMAGE_PATH}${posterPath}` : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=no%20image&w=200&h=200';

  return (
    <div className="search-result">
      <div className="media-object">
        <div className="media-object-section">
          <div className="thumbnail">
            <img src={imgPath}/>
          </div>
        </div>
        <div className="media-object-section">
          <h4>{title}</h4>
          <Link to={`/movie/${id}`}>More Info</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
