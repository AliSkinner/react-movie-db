import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import MovieSearch from 'MovieSearch';
import MovieDetail from 'MovieDetail';

describe('MovieDetail', () => {

  it('should exist', () => {
    expect(MovieDetail).toExist();
  });

  it('should render Movie component', () => {
    let movie = {
      id: 1,
      title: 'Jaws',
      genre: 'Thriller',
      posterPath: '/some-url.jpg',
      rating: 10,
    };
    let movieParams = {movieID: 1}
    let movieDetail = TestUtils.renderIntoDocument(<MovieDetail params={movieParams} />);
    let $el = $(ReactDOM.findDOMNode(movieDetail));

    expect($el).toExist();
    expect(movieDetail.props.params).toEqual(movieParams);
  });

  it('should render error', () => {
    let searchForm = TestUtils.renderIntoDocument(<MovieSearch />);
    searchForm.setState({errorMessage: 'error', movies: undefined});
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el.find('.error-message').length).toBe(1);
  });

  it('should render loading message', () => {
    let searchForm = TestUtils.renderIntoDocument(<MovieSearch />);
    searchForm.setState({isLoading: true});
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el.find('.loading-message').length).toBe(1);
  });

  it('should render search results', () => {
    let movies = [{
      id: 1,
      title: 'Jaws',
      genre: 'Thriller',
      posterPath: '/some/url.jpg',
      rating: 10,
    },{
      id: 2,
      title: 'Jaws II',
      genre: 'Thriller',
      posterPath: '/some/other/url.jpg',
      rating: 10,
    }]

    let searchForm = TestUtils.renderIntoDocument(<MovieSearch />);
    searchForm.setState({movies: movies});
    let $el = $(ReactDOM.findDOMNode(searchForm));
    expect($el.find('.search-result').length).toBe(2);
  });

});
