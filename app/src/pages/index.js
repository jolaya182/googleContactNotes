/* *
  title: index.js 

  date: 7/19/2019

  author:  javier olaya

  description: main file used to render different components for each page 
  in every created route path
         
 */
import React from 'react';
import MainMenu from './MainMenu';
import Contcts from '../containers/Contacts';

export const Whoops404 = () => <div className={"whoops404"}>
  <h1>resources not found at {location.pathname}</h1>
</div>

const PageTemplate = ({ children }) => <div className={"page"}>
  <MainMenu></MainMenu>
  {children}
</div>

export const Contacts = (props) => <PageTemplate>
  <div>
    <section className={"contacts"}>
      <h1>Contacts!</h1>
      <Contcts props={props}></Contcts>
    </section>
  </div>
</PageTemplate>

export const Profile = () => <PageTemplate>
  <div >
    <section className={"profile"}>
      <h1> Profile!</h1>
    </section>
  </div>
</PageTemplate>


