import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskDetail(props) {
  const {arg, onTaskClick, onDelete} = props;

  return (
    <List className='listStyle' sx={{ width: '100%', maxWidth: 360}}>
        <ListItem
        key={arg.taskTitle}
        secondaryAction={
            <IconButton edge="end" aria-label="comments">
            <DeleteIcon onClick={() => onDelete(arg.taskTitle)} />
            </IconButton>
        }
        disablePadding
        >
        <ListItemButton role={undefined} onClick={() => onTaskClick(arg.taskTitle)} dense>
            <ListItemIcon>
            <Checkbox
                edge="start"
                checked={arg.completed}
                disableRipple
                
            />
            </ListItemIcon>
            <ListItemText id={arg.taskTitle} primary={arg.taskTitle} />
        </ListItemButton>
        </ListItem>
    </List>
  );
}
