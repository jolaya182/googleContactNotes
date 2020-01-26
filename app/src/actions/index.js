/* *
  title: action.js 

  date: 7/19/2019

  author:  javier olaya

  description: holds all the actions for the redux need for this google contact applications 
         
 */

export const addContacts = (contacts) => ({
  type: "ADD_CONTACTS",
  contacts: contacts
})

export const authorizationSubmission = () => ({
  type: "AUTHORIZATION_SUBMISSION"
})

export const unauthorizationSubmission = () => ({
  type: "UNAUTHORIZATION_SUBMISSION"
})

export const submitUpdateContactDesc = (contact) => ({
  type: "SUBMIT_UPDATE_CONTACT_DESC",
  contact: contact
})

export const clearContacts = () => ({
  type: "CLEAR_CONTACTS"
});