import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <div className="reading-list">
      <h2>READING LIST</h2>
      <List>
        {books.map((book) => (
          <ListItem key={book.title}>
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemSecondaryAction>
              <Button variant="contained" color="secondary" onClick={() => onRemove(book.title)}>
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
