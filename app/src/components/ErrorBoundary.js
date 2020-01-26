/* *
  title: ErrorBoundary.js 

  date: 7/19/2019

  author:  javier olaya

  description: component mounted so find any error used for debugging purposes 
         
 */
import React from 'react';

/* define the state properties of  ErrorBoundary*/
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log("error found:", error, " Info found:", info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}