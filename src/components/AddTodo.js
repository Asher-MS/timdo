import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'
import axios from 'axios';



function Addtodo(props){
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    const [time,setTime]=useState();
    const [userIp,setUserIp]=useState('');
    useEffect(()=>{
      axios.get("https://api.ipify.org/?format=json").then((res)=>{
        
        setUserIp(res.data['ip']);
        
        
  
      })
    },[]);


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
          <Button type='secondary-light'onClick={()=>{props.handleAdd(title,content,time,userIp);}}>Add Task</Button>
        </Modal.Content>
        
      </Modal>
        
    );
}

export default Addtodo;