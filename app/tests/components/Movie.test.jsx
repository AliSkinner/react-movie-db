import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Movie from 'Movie';


describe('Movie', () => {

  it('should exist', () => {
    expect(Movie).toExist();
  });

  // TODO: Improve this test
  it('should fill Movie component with correct data', () => {
    let movie = {
      id: 1,
      title: 'Jaws',
      genre: 'Thriller',
      posterPath: '/some/url.jpg',
      rating: 10,
    };
    let movieComponent = TestUtils.renderIntoDocument(<Movie {...movie}/>);
    expect(Movie).toExist();
  });

});
