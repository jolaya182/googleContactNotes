/* *
  title: contacts.js 

  date: 7/19/2019

  author:  javier olaya

  description: reducer used to keep track of all the users profile
         
 */
const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACTS':
      return action.contacts;
    case 'SUBMIT_UPDATE_CONTACT_DESC':
      return state.map((contact) =>
        contact.resourceName === action.contact.resourceName ? action.contact : contact
      );
    case "CLEAR_CONTACTS":
      return [];
    default:
      return state;
  }
}

export default contacts;