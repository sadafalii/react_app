import React from 'react';
import {Route,IndexRoute} from "react-router";
import AppRepiCom from "./components/AppRepiCom";
import AddData from "./components/Add/AddData";
import DisplayData from "./components/Display/DisplayData";
import CreateAddData from "./components/Add/CreateAddData";
export default (
  <Route path="/" component={AppRepiCom}>
    <IndexRoute component={AddData}/>
    <Route path="display" component={DisplayData}/>
    <Route path="user" component={CreateAddData}/>
    <Route path="user/:" component={CreateAddData}/>
    <Route path="user/:id" component={CreateAddData}/>

  </Route>
);
