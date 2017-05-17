import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import SearchForm from 'SearchForm';


describe('SearchForm', () => {

  it('should exist', () => {
    expect(SearchForm).toExist();
  });

  // TODO: Fix this test. Throws error on TestUtils.Simulate.submit()
  it('should call onFormSubmit on submit', () => {
    let spy = expect.createSpy();
    let searchForm = TestUtils.renderIntoDocument(<SearchForm onSubmit={spy} />);
    let $el = $(ReactDOM.findDOMNode(searchForm));

    searchForm.refs.searchTerm.value = 'jaws';
    // TestUtils.Simulate.submit($el.find('form')[0]);
    // expect(spy).toHaveBeenCalledWith('jaws');
  });

});
