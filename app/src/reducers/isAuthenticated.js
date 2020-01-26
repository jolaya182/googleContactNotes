/* *
  title: isAuthenticated.js 

  date: 7/19/2019

  author:  javier olaya

  description: holds the authentication state for the user
         
 */
const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case "AUTHORIZATION_SUBMISSION":
      return true;
    case "UNAUTHORIZATION_SUBMISSION":
      return false;
    default:
      return state;
  }
}

export default isAuthenticated;