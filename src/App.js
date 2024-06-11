import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BookAssignmentView from './frontend/pages/BookAssignment';
import theme from './frontend/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <BookAssignmentView />
      </div>
    </ThemeProvider>
  );
}

export default App;
