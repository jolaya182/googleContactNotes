/* *
  title: LoginComponent.js 

  date: 7/19/2019

  author:  javier olaya

  description: this component handles the google authentication process making any redirects
         
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import pages from '../css/index.scss';
import GoogleIconButton from './GoogleIconButton';
import { withRouter } from 'react-router-dom';
import keys from '../keys';

const GOOGLE_BUTTON_ID = 'google-sign-in-button';

/* define the state properties of LoginComponent */
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: props.isAuthenticated }
    this.authorize = props.authorize;
    this.unauthorize = props.unauthorize;
  }


  componentDidMount() {
    //original button would be mounted here
    // window.gapi.signin2.render(
    //   GOOGLE_BUTTON_ID, { width: 200, height: 50 }
    // );
  }

  /* *
    @description gather google profile data

    @param object googlUser

    */
  onSuccess = (googlUser) => {
    let profile = googlUser.getBasicProfile();
    console.log("Id", profile.getId());
    console.log("Name", profile.getName());
    console.log("Image url:", profile.getImageUrl());
    console.log("Email", profile.getEmail());
  }

  /* *
    @description makes the authentication process happen using the api keys

    @param 

    */
  signIn = () => {

    let auth = false;
    async function initGoogleAuthen(authorize, unauthorize, setState, props) {
      let additionalPermissions = function () {
        let auth2 = window.gapi.auth2.init(
          {
            apiKey: keys.apiKey,
            client_id: keys.client_id,
            cookiepolicy: 'single_host_origin', /** Default value **/
            scope: 'profile'
          }
        );
        let options = new gapi.auth2.SigninOptionsBuilder(
          { 'scope': 'https://www.googleapis.com/auth/contacts' });

        let googleUser = auth2.currentUser.get();

        googleUser.grant(options).then(
          function (success) {
            console.log(JSON.stringify({ message: "success", value: success }));
            auth = true;
            authorize();

            props.history.push("/profile");
          }, function (fail) {
            alert(JSON.stringify({ LoginFail: "fail to login, please login", reason: fail }));
            unauthorize();
          }
        )
      }
      await gapi.load('auth2', additionalPermissions)
      return auth;
    }
    initGoogleAuthen(this.authorize, this.unauthorize, this.setState, this.props).then((auth) => {
    });
  }

  /* *
    @description signs out the google user

    @param 

    */
  signOut = () => {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }

  render() {
    let { isAuthenticated } = this.state;
    let { signIn } = this;
    let props = this.props;
    return (<div className={"row"}>
      <div className={"column"} >
        <GoogleIconButton signIn={signIn}></GoogleIconButton>
      </div>
      <div id={GOOGLE_BUTTON_ID}></div>
      <Route
        render={
          (props) => (isAuthenticated === true ?
            <Redirect push to="/contacts" /> :
            <Redirect to='/' />
          )}
      />
    </div>
    )

  }
}
export default withRouter(LoginComponent); 