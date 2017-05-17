import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import MovieSearch from 'MovieSearch';


// load foundation
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={MovieSearch}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
