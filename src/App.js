import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './components/feed';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

console.log(theme);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Feed />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
