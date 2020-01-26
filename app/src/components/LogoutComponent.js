/* *
  title: LoginComponent.js 

  date: 7/19/2019

  author:  javier olaya

  description: component used to sign out and revoke tokens
         
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import keys from '../keys';

/* define the state properties of  */
export default class LogoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: props.isAuthenticated
    }
    this.unauthorize = props.unauthorize;
    this.clearContacts = props.clearContacts;
  }

  /* *
    @description makes gapi call to sign out and clear redux contacts data making
    the a redirect depending on the state of the authentication

    @param funct, funct

    */
  signOut = (unauthorize, clearContacts) => {
    let auth2 = window.gapi.auth2.init(
      {
        apiKey: keys.apiKey,
        client_id: keys.client_id,
        cookiepolicy: 'single_host_origin', /** Default value **/
        scope: 'profile'
      }
    ).then(() => {
      let ath = gapi.auth2.getAuthInstance();
      ath.signOut().then(function () {
        unauthorize();
        clearContacts();
      })
      ath.disconnect()
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state, props) => ({ isAuthenticated: nextProps.isAuthenticated }))
  }

  render() {
    const { isAuthenticated } = this.state;
    const { signOut, unauthorize, clearContacts } = this;
    const selectedStyle = {
      backgroundColor: "slategray",
      color: "white"
    }
    return (isAuthenticated ? <NavLink to="/" activeStyle={selectedStyle} onClick={() => signOut(unauthorize, clearContacts)}>sign out</NavLink> : <div></div>);
  }
}

