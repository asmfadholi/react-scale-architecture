import React, { Fragment } from "react";
import { Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { RouteWithSubRoutes } from './routers/index'
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

import "./App.css";
import 'react-notifications/lib/notifications.css';

function App(props) {
  console.log('appjs')
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
        <NotificationContainer/>
      </div>
      <Switch>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Fragment>
  );
}
export default App;
