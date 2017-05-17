import React from 'react';

class SearchForm extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <form ref='form'>
          <input type='search' ref='searchTerm' placeholder='Search from a movie...'/>
          <button className='button expanded hollow'>Search</button>
        </form>
      </div>
    );
  }

};

export default SearchForm;
