import { GeistProvider, CssBaseline,Image,Card,Button,useModal } from '@geist-ui/react'
import React,{useState} from 'react'
import TaskTimer from './TaskTimer';


function Task(props){
    const { visible, setVisible, bindings } = useModal();
    return(
        <div className="Task">
            <Card shadow>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <p>{props.duration}</p>
            {/* <p>{props.ip}</p> */}
            
            <Button type="success-light" onClick={()=>{setVisible('true');}}>Start</Button>
            <Button type='error-light' onClick={()=>{props.handleDelete(props.title)}}>Delete</Button>
            </Card>
            <TaskTimer visible={visible} setVisible={setVisible} bindings={bindings} task={props.title} date={props.duration} content={props.body} />
        </div>


    );
}

export default Task;