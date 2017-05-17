import React from 'react';

import movieAPI from 'theMovieDB';

import SearchForm from 'SearchForm';


class MovieSearch extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      movies: undefined
    };

  }

  handleSearch (searchTerm) {
    let that = this;

    this.setState({movies: undefined});

    movieAPI.search(searchTerm)
      .then((movies) => {
        that.setState({movies});
        console.log(that.state);
      }, (e) => {
        console.log(e);
      });

  }

  render () {
    return (
      <div>
        <div>MovieSearch</div>
        <SearchForm onSearch={this.handleSearch}/>
      </div>
    );
  }

};

export default MovieSearch;
