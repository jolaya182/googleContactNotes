
/* *
  title: Contact.js 

  date: 7/19/2019

  author:  javier olaya

  description: component holding the name text input and sumbit for a contact
         
 */
import React from 'react';
import pages from '../css/index.scss';

/* define the state properties of Contact */
export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contact: props.contact }
    this.submitUpdateContactDesc = props.submitUpdateContactDesc;

  }
  /* *
   @description dispatch the forms data

   @param Event

   */
  updateContactDesc = (e) => {
    e.preventDefault();
    const form = this.form;
    const description = form[0];
    let contact = { ...this.state.contact }
    contact.biography = description.value;
    this.submitUpdateContactDesc(contact);
  }

  /* *
    @description updates the contacts info to the state of this component

    @param Event

    */
  onChangeBiography = (e) => {
    e.preventDefault();
    let txt = this.txt.value;
    console.log("txt", txt);
    this.setState((state, props) => ({ contact: { ...state.contact, biography: txt } }));
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState((state, props) => ({ contact: nextProps.contact }));
  }

  render() {
    const { updateContactDesc, onChangeBiography } = this;
    const { contact } = this.state;
    return (<div className={"row"}>
      <form onSubmit={updateContactDesc} ref={form => this.form = form} onChange={f => f}>
        <label className={"column"} >{contact.name}</label>
        <input className={"column"} type={"text"} style={{ width: "500px" }} value={contact.biography} ref={txt => this.txt = txt} onChange={onChangeBiography} ></input>
        <button className={"column"} type="submit"> submit </button>
      </form>
    </div>);
  }
}
