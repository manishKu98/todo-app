import './style.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../modal';

function Input({setTaskName}) {
    const [task, setTask] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function onButtonClick(e) { 
        e.preventDefault()
        setTaskName((prev) => {
            return [...prev, {taskTitle: task,  completed: false}];
        })
        setTask('')
        handleClose()
    }

    function isDisable() {
        if(!task){
            return true;
        }
        return false;
    }
    return(
        <div className='Add-Task' sx={{ border: 1 }}>
            <Button onClick={handleOpen} startIcon={<AddIcon />}>Add a Task</Button>
            <Popup open={open} handleClose={handleClose}>
                <h3 className='new-task'>New Task</h3>
                <TextField
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className='title-field'
                    label="Task-Title" 
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                />
                <Button disabled={isDisable()} onClick={onButtonClick} className='btn' variant="outlined" startIcon={<AddIcon />}>Add</Button>
            </Popup>
        </div>
    )
}
export default Input;



