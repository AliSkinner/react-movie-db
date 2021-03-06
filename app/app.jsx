import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import MovieDetail from 'MovieDetail';
import MovieSearch from 'MovieSearch';


// load foundation
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={MovieSearch}/>
    <Route path='/movie/:movieID' component={MovieDetail}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
