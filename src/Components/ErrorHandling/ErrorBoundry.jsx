import React, { Component } from 'react';

/**
 * @description catches JavaScript errors anywhere in its child component tree logs those errors,
 * and displays a fallback UI instead of crashing the whole component tree
 */
class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError (error) { return { hasError: true }; }
  componentDidCatch (error, errorInfo) { console.error('Error caught in ErrorBoundary: ', error, errorInfo); }
  render () {
    if (this.state.hasError) { return <h2>Something went wrong.</h2>; }
    return this.props.children;
  }
}
export default ErrorBoundary;
