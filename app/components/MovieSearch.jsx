import React from 'react';

import SearchForm from 'SearchForm';


class MovieSearch extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (searchTerm) {
    console.log(searchTerm);
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
