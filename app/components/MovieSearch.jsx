import React from 'react';

import movieAPI from 'theMovieDB';

import SearchForm from 'SearchForm';
import SearchResult from 'SearchResult';


class MovieSearch extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      errorMessage: undefined,
      isLoading: false,
      movies: undefined,
    };
  }

  handleSearch (searchTerm) {
    let that = this;

    this.setState({
      errorMessage: undefined,
      isLoading: true,
      movies: undefined
    });

    movieAPI.search(searchTerm)
      .then((movies) => {
        that.setState({
          isLoading: false,
          movies
        });
      }, (e) => {
        that.setState({
          errorMessage: e.message,
          isLoading: false,
        });
      });

  }

  render () {
    let{errorMessage, isLoading, movies} = this.state;

    let renderMovies = () => {
      if (isLoading) {
        return (
          <p className="text-center loading-message">Loading Movies</p>
        );
      } else if (movies && movies.length > 0) {
        return (
          movies.map((movie) => {
            return (
              <SearchResult
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genre={movie.release_date}
              posterPath={movie.poster_path}
              rating={movie.vote_average} />
            );
          })
        );
      } else if (movies && movies.length === 0) {
        return (
          <p className="text-center no-results">No Results</p>
        );
      }
    };

    let renderErrorMessage = () => {
      if (typeof errorMessage === 'string') {
        return (
          <p className="text-center error-message">{errorMessage}</p>
        );
      }
    };

    return (
      <div className="movie-search">
        <h1 className="text-center">The Movie DB</h1>
        <SearchForm onSearch={this.handleSearch}/>
        <section className="search-results">
          {renderMovies()}
          {renderErrorMessage()}
        </section>
      </div>
    );
  }

}

export default MovieSearch;
