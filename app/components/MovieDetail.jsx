import React from 'react';

import movieAPI from 'theMovieDB';

import Movie from 'Movie';


class MovieDetail extends React.Component {

  constructor (props) {
    super(props);
    this.handleGetMovieDetails = this.handleGetMovieDetails.bind(this);
    this.state = {
      isLoading: true,
      errorMessage: undefined,
      movie: undefined,
    };
  }

  handleGetMovieDetails () {
    let {movieID} = this.props.params;
    let that = this;

    this.setState({
        // isLoading: true,
      errorMessage: undefined,
      movie: undefined,
    });

    movieAPI.getDetails(movieID)
      .then((movie) => {
        that.setState({
          movie,
          isLoading: false
        });
      }, (e) => {
        that.setState({
          errorMessage: e.message,
          isLoading: false
        });
      });
  }

  componentWillMount () {
    this.handleGetMovieDetails();
  }

  render () {
    let {isLoading, errorMessage, movie} = this.state;

    let renderMovie = () => {
      if (isLoading) {
        return (
          <p className="text-center loading-message">Loading Movie</p>
        );
      } else if (movie) {
        return (
          <Movie {...movie}/>
        );
      }
    };

    let renderErrorMesage = () => {
      if (typeof errorMessage === 'string') {
        return (
          <h3 className="text-center error-message">{errorMessage}</h3>
        );
      }
    };

    return (
      <div className="movie-detail">
        {renderMovie()}
        {renderErrorMesage()}
      </div>
    );
  }

}

export default MovieDetail;
