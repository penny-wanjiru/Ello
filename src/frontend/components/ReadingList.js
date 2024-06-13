import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemSecondaryAction, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ReadingList = ({ books, onRemove }) => {
  const theme = useTheme();
  return (
    <div className="reading-list">
      <Typography variant="h2">READING LIST</Typography>
      <div className='reading-list-container'>
        <List>
          {books.length === 0 ? (
            <ListItem>
              <ListItemText primary="No books in the reading list" />
            </ListItem>
          ) : (
            books.map((book) => (
              <ListItem key={book.title} >
                <ListItemText primary={book.title} secondary={book.author} />
              <ListItemSecondaryAction>
                <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.orangeRed, color: theme.palette.secondary.pastel }} onClick={() => onRemove(book.title)}>
                  Remove
                </Button>
              </ListItemSecondaryAction>
              </ListItem>
            ))
          )}
        </List>
      </div>
    </div>
  );
};

export default ReadingList;
