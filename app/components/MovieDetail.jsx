import React from 'react';
import Movie from 'Movie';


class MovieDetail extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>MovieDetail</div>
        <Movie/>
      </div>
    )
  }

};

export default MovieDetail;
