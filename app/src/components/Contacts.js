/* *
  title: Contact.js 

  date: 7/19/2019

  author:  javier olaya

  description: holds all the contacts that retrieves from user's google account
         
 */
import React from 'react';
import Contact from './Contact';
import keys from '../keys';
import { withRouter } from 'react-router-dom';

/* define the state properties of Contacts*/
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: props.contacts, isAuthenticated: props.isAuthenticated };
    this.addContacts = props.addContacts;
    this.submitUpdateContactDesc = props.submitUpdateContactDesc;
    this.authorizationSubmission = props.authorizationSubmission,
      this.unauthorizationSubmission = props.unauthorizationSubmission;
  }

  /* *
    @description makes gapi call to retrieve all the contacts using the apis keys

    @param 

    */
  componentDidMount() {
    function getConnectionsData(addContacts, setState, authorizationSubmission) {
      function start() {
        gapi.client.init({
          'apiKey': keys.apiKey,
          'client_id': keys.client_id,
          'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
          'scope': 'profile'
        }).then(() => {
          return gapi.client.people.people.connections.list({
            'resourceName': 'people/me',
            'pageSize': 10,
            'personFields': 'names,biographies',
          }).then((response) => {
            addContacts(response.result.connections);
          }, (reason) => { console.log("error", reason.result.error.message) })
        })
      }
      gapi.load('client', start);
    }
    getConnectionsData(this.addContacts, this.setState, this.authorizationSubmission)
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state, props) => ({ contacts: nextProps.contacts, isAuthenticated: nextProps.isAuthenticated }));
  }

  render() {
    const { contacts } = this.state;
    const { submitUpdateContactDesc } = this;
    return (<div>
      {contacts.map((contact, key) => {
        return (<Contact key={key} contact={contact} submitUpdateContactDesc={submitUpdateContactDesc}>
        </Contact>);
      })}
    </div>);
  }
}
export default withRouter(Contacts);