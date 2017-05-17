import React from 'react';

import SearchForm from 'SearchForm';


class MovieSearch extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>MovieSearch</div>
        <SearchForm/>
      </div>
    );
  }

};

export default MovieSearch;
