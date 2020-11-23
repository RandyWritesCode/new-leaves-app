import React from 'react';

export default class AppError extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    };

  }
  static getDerivedSateFromError(error) {
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   logErrorToMyService(error, errorInfo);
  // }


  render() {
    if (this.state.hasError) {
      return (
        <h2>Could not display this component.</h2>
      );
    }
    return this.props.children;
  }
}
