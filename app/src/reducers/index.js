/* *
  title: index.js 

  date: 7/19/2019

  author:  javier olaya

  description: used to combine all reducers 
         
 */
import { combineReducers } from 'redux';
import contacts from './contacts';
import isAuthenticated from './isAuthenticated';

export default combineReducers({
  contacts,
  isAuthenticated
})