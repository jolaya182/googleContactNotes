/* *
  title: LoginContainer.js 

  date: 7/19/2019

  author:  javier olaya

  description: login container passes state and props to check users authenticaton
  status
         
 */
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import { authorizationSubmission, unauthorizationSubmission } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    isAuthenticated: state.isAuthenticated,
  });
}

const mapDispatchToProps = (dispatch) => ({
  submit: (userName, password) => { dispatch(submitUsernamePassword(userName, password)) },
  authorize: () => { dispatch(authorizationSubmission()) },
  unauthorize: () => { dispatch(unauthorizationSubmission()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);