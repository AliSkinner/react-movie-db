import React from 'react';

import movieAPI from 'theMovieDB';

import SearchForm from 'SearchForm';
import SearchResult from 'SearchResult';


class MovieSearch extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false,
      movies: undefined,
    };
  }

  handleSearch (searchTerm) {
    let that = this;

    this.setState({
      isLoading: true,
      movies: undefined
    });

    movieAPI.search(searchTerm)
      .then((movies) => {
        that.setState({
          isLoading: false,
          movies
        });
        console.log(that.state);
      }, (e) => {
        console.log(e);
      });

  }

  render () {
    let{isLoading, movies} = this.state;

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
      }
    };

    return (
      <div>
        <div>MovieSearch</div>
        <SearchForm onSearch={this.handleSearch}/>
        {renderMovies()}
      </div>
    );
  }

};

export default MovieSearch;
