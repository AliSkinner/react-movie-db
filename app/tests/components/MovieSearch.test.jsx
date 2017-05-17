import expect from 'expect';
import $ from 'jQuery';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

import MovieSearch from 'MovieSearch';
import SearchForm from 'SearchForm';

describe('MovieSearch', () => {

  it('should exist', () => {
    expect(MovieSearch).toExist();
  });

  it('should render SearchForm', () => {
    let searchForm = TestUtils.renderIntoDocument(<SearchForm />);
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el).toExist();
  });

  it('should render loading message', () => {
    let searchForm = TestUtils.renderIntoDocument(<MovieSearch />);
    searchForm.setState({isLoading: true});
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el.find('.loading-message').length).toEqual(1);
  });

  it('should render no results message if no results', () => {
    let movies = [];
    let searchForm = TestUtils.renderIntoDocument(<MovieSearch />);
    searchForm.setState({movies});
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el.find('.no-results').length).toEqual(1);
  });

});
