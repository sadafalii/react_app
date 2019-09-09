import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from "./store/configureStore";
import {Provider} from 'react-redux';
import {Router,browserHistory} from "react-router";
import routes from "./routes";
import {loadUsers} from "./actions/addDataActions";
import {loadCompany} from "./actions/companyActions";
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store=configureStore();
store.dispatch(loadUsers());
store.dispatch(loadCompany());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
