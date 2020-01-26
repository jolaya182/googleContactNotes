/* *
  title: Contacts.js 

  date: 7/19/2019

  author:  javier olaya

  description: container that passes state and props, as well as extracting the 
  incoming 'contacts' data after the gapi call
         
 */
import { connect } from 'react-redux';
import Contacts from '../components/Contacts';
import {
  addContacts, submitUpdateContactDesc,
  authorizationSubmission, unauthorizationSubmission
} from '../actions';
import keys from '../keys';

/* *
  @description function that receives contacts and organizes each contact into an object for storage 

  @param array

  @return array
  */

const extractContacts = (connections) => {
  return connections.map((contact) => {
    return ({
      etag: contact.etag,
      resourceName: contact.resourceName,
      name: contact.names === undefined ? "" : contact.names[0].displayName,
      biography: contact.biographies === undefined ? "" : contact.biographies[0].value
    })
  }
  )
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  authorizationSubmission: () => dispatch(authorizationSubmission()),
  unauthorizationSubmission: () => dispatch(unauthorizationSubmission()),
  addContacts: (contact) => dispatch(addContacts(extractContacts(contact))),
  submitUpdateContactDesc: (contact) => {

    function submitUpdateContactDescReq(contact, dispatch, submitUpdateContactDesc) {
      const submitContact = {
        "resourceName": contact.resourceName,
        "etag": contact.etag,
        "biographies": [{ "value": contact.biography }],
      };

      function start() {
        gapi.client.init({
          'apiKey': keys.apiKey,
          'client_id': keys.client_id,
          'clientId': '1087606512645-u8g3d3mii0oun1uisqf3ko06r5j2sdpb.apps.googleusercontent.com',
          'scope': 'profile'
        }).then(() => {
          return gapi.client.people.people.updateContact({
            'updatePersonFields': 'biographies',
            "etag": submitContact.etag,
            'resourceName': submitContact.resourceName,
            'biographies': submitContact.biographies,
          }).then((response) => {
            const contct = response.result;
            const submitContactStore = {
              "resourceName": contct.resourceName,
              "etag": contct.etag,
              "name": contct.names === undefined ? "" : contct.names[0].displayName,
              "biography": contct.biographies === undefined ? "" : contct.biographies[0].value
            };
            dispatch(submitUpdateContactDesc(submitContactStore));
          }, (reason) => { console.log("error", reason.result.error.message) })
        })
      }
      gapi.load('client', start);
    }
    submitUpdateContactDescReq(contact, dispatch, submitUpdateContactDesc)

  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);