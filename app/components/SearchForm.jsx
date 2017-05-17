import React from 'react';

class SearchForm extends React.Component {

  constructor (props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit (e) {
    e.preventDefault();

    let searchTerm = this.refs.searchTerm.value;

    if (searchTerm.length > 0) {
      this.refs.searchTerm.value = '';
      this.props.onSearch(searchTerm);
    }
  }

  render () {
    return (
      <div className="search-form">
        <form ref='form' onSubmit={this.onFormSubmit}>
          <input type='search' ref='searchTerm' placeholder='Search from a movie...'/>
          <button className='button expanded hollow'>Search</button>
        </form>
      </div>
    );
  }

};

export default SearchForm;
