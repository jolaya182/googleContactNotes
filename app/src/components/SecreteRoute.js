/* *
  title: SecreteRoute.js 

  date: 7/19/2019

  author:  javier olaya

  description: component to display to the user if the authentication is correct otherwise
  redirect the user to the main login page 
         
 */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const SecretRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (<Route {...rest}
    render={
      (props) => (isAuthenticated === true ?
        <Component {...props} /> :
        <Redirect to='/' />
      )}
  />
  );
}
export default SecretRoute;