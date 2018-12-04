import React, { Component } from 'react';

const myStyleBasedOnProps = TargetComponent => (strs, ...exprs) =>
  class extends Component {
    interpolateStyle() {
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === 'function';

        const value = isFunc ? expr(this.props) : expr;
        // console.log('strs: ', result);
        // console.log('value: ', value);
        // console.log('strs[index + 1]: ', strs[index + 1]);
        // console.log('strs[index + 1]: ', strs) - array of each line of elements;
        return result + value + strs[index + 1];
      }, strs[0]);

      this.el.setAttribute('style', style);
    }
    componentDidMount() {
      this.interpolateStyle();
    }

    componentDidUpdate() {
      this.interpolateStyle();
    }

    render() {
      return <TargetComponent {...this.props} ref={el => (this.el = el)} />;
    }
  };

const primaryColor = 'blue';

export const Button = myStyleBasedOnProps('button')`
  background: ${({ primary }) => (primary ? 'white ' : primaryColor)};
  color: ${({ primary }) => (primary ? primaryColor : 'white')}; 
  padding: 0.25rem 1rem; 
  border: solid 2px ${primaryColor}; 
  border-radius: 3px;
  margin: 0.5rem;
`;
