/* *
  title: SecreteContainer.js 

  date: 7/19/2019

  author:  javier olaya

  description: container that passes state and props so it can
  be determine if the contacts pages should be render
         
 */
import { connect } from 'react-redux';
import SecreteRoute from '../components/SecreteRoute';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.isAuthenticated,
  Component: ownProps.Component
})

const mapDispatchToProps = dispatch => ({
  authorizationSubmission: () => dispatch(authorizationSubmission()),
  unauthorizationSubmission: () => dispatch(unauthorizationSubmission()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecreteRoute);