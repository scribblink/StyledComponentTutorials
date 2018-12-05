import React from 'react';
import ThemeContext from '../ThemeContext';

const Text = props => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        const { headerColor, textColor } = theme;
        return (
          <div style={{ background: headerColor }}>
            <p style={{ color: textColor }}>{props.compText}</p>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Text;
