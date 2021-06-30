import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer } from '@geist-ui/react'
import React,{useState} from 'react'



function Addtodo(props){
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    const [time,setTime]=useState();


    return(
        <Modal {...props.bindings}>
        <Modal.Title>Add Note</Modal.Title>
        
        <Modal.Content>
            
          <Input placeholder="Title (No Spaces)" size="large" onChange={(e)=>{setTitle(e.target.value)}}><Text h5>Title</Text></Input>
          <Spacer y={1}/>
          <Text>Description</Text>
          <Textarea placeholder="Please enter a description." onChange={(e)=>{setContent(e.target.value)}}>
          
          </Textarea>
          <br/>
          <Text>Time</Text>
          <input type="time" id="tasktime" name="appt" required onChange={(e)=>{setTime(e.target.value)}}></input>
          <br></br>
          <Spacer y={3}/>
          <Button type='secondary-light'onClick={()=>{props.handleAdd(title,content,time);}}>Add Task</Button>
        </Modal.Content>
        
      </Modal>
        
    );
}

export default Addtodo;