/* *
  title: LogoutContainer.js 

  date: 7/19/2019

  author:  javier olaya

  description: container that passes state and props so that the user and can log out
         
 */
import { connect } from 'react-redux';
import LogoutComponent from '../components/LogoutComponent';
import { unauthorizationSubmission, clearContacts, } from '../actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return ({
    isAuthenticated: state.isAuthenticated,
  });
}

const mapDispatchToProps = (dispatch) => ({
  unauthorize: () => { dispatch(unauthorizationSubmission()) },
  clearContacts: () => dispatch(clearContacts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutComponent);