import React from 'react';
import { List, ListItem, ListItemText, Button, ListItemSecondaryAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ReadingList = ({ books, onRemove }) => {
  const theme = useTheme();
  return (
    <div className="reading-list">
      <h2>READING LIST</h2>
      <List>
        {books.map((book) => (
          <ListItem key={book.title}>
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemSecondaryAction>
              <Button variant="contained" style={{ backgroundColor: theme.palette.secondary.orangeRed, color: theme.palette.secondary.pastel }} onClick={() => onRemove(book.title)}>
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
