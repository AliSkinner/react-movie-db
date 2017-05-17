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
        console.log(movie)
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
    return (
      <div>
        <div>MovieDetail</div>
        <Movie/>
      </div>
    );
  }

};

export default MovieDetail;
