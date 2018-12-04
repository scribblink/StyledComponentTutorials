import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

import logo from './logo.svg';

import { theme1, theme2, Button} from './theme/globalStyle';
import ThemeSelect from './components/ThemeSelect';

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &.hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`
const AppHeader = styled.div`
  background-color: ${props => props.theme.primary}
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.dark}
`
const AppTitle = styled.h1`
  font-size: 1.3em;
  font-weight
`
const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

class App extends Component {
  
  state = {
    theme: theme1
  }
  
  handleThemeChange = e => {
    let theme = e.target.value;
    theme = (theme === "theme1") ? theme1 : theme2;
    this.setState({ theme });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React W/ Styled-Components</AppTitle>
          </AppHeader>
          <AppIntro>
            Welcome to <code>InRhythm U</code>
          </AppIntro>
          <AppIntro>
            React Component styled with <code>styled-components</code>{' '}
          </AppIntro>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </AppWrapper>
      </ThemeProvider>  
    );
  }
}

export default App;
