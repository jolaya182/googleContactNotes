/* *
  title: Picture.js 

  date: 7/19/2019

  author:  javier olaya

  description: comppnent to hold the piture
         
 */
import React from 'react';

const Picture = ({ picture }) => {
  return (<a><img className={"pic"} src={picture}></img></a>
  );
}
export default Picture;