import TaskDetail from '../taskDetail/taskDetail';
import './style.css';

function List(props){
    const {title, taskName, setTaskName} = props;
    console.log('list :: ', title, taskName);

    function onTaskClick(task) {
        setTaskName((arg) => {
            return arg.map((t) => {
                if(t.taskTitle === task){
                    return {...t, completed: !t.completed}
                }
                return t;
            })
        })
    }

    function onDelete(task) {
        setTaskName((arg) => {
            return arg.filter((t) => {
                if(t.taskTitle === task){
                    return false;
                }
                return true;
            })
        })
    }
    return(
        <div>
            <h2 className="list-title">{title}</h2>
            <ul style={{ padding: 0 }}>
                {
                       taskName.map((arg) => {
                        return <TaskDetail key={arg.taskTitle} arg={arg} onTaskClick={onTaskClick} onDelete={onDelete} />
                    })
                }  
            </ul>
        </div>  
    )
}
export default List;


