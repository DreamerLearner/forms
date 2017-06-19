import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise'; 
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import SearchForm from './components/SearchForm';
import ReactWidgetsForm from './components/ReactWidgetsForm';
// import SearchForm from './components/SearchForm_v2';
// import SearchForm from './components/SearchForm_v3';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
    	<div>
    		<Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/search" component={SearchForm} />
    			<Route path="/search2" component={ReactWidgetsForm} />
    		</Switch>
    	</div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
