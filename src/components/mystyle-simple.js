import React, { Component } from 'react';

const myStyleSimple = TargetComponent => ([style]) =>
  class extends Component {
    componentDidMount() {
      this.el.setAttribute('style', style);
    }

    render() {
      return <TargetComponent {...this.props} ref={el => (this.el = el)} />;
    }
  };

export const Button = myStyleSimple('button')`
  color: coral; 
  padding: 0.25rem 1rem; 
  border: solid 2px coral; 
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1rem;
`;
