import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import App from './app.jsx';

const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#00BCD4" // This is an cyan color
               },
     secondary: {
        main: "#18FFFF" //Another brighter cyan color
                }
           }
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('app'));