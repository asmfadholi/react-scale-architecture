import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import Action from './actions/index'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from './routers/index'
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";


import "./App.css";
// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

function App(props) {
  console.log('appjs')
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
      <Switch>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return { };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getListTodo: ()=> dispatch(Action.getListTodo()) 
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
