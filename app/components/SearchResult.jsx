import React from 'react';
import {Link} from 'react-router';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';


const SearchResult = ({id, posterPath, rating, title}) => {
  let imgPath = posterPath ? `${IMAGE_PATH}${posterPath}` : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=no%20image&w=200&h=200';

  return (
    <article className="search-result text-center">
      <div class="card">
        <img src={imgPath} />
        <div class="card-section">
          <h4>{title}</h4>
          <p><Link to={`/movie/${id}`}>More Info</Link></p>
        </div>
      </div>
    </article>
  );
};

export default SearchResult;
