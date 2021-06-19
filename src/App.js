import logo from './logo.svg';
import './App.css';
import { GeistProvider, CssBaseline,Image,Card,Grid,Button,Spacer,useModal } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'
import Task from './components/task'
import Cam from './components/cam';
import Addtodo from './components/AddTodo';
import TaskTimer from './components/TaskTimer';
import axios from 'axios';
function App() {
  let [tasks,setTasks]=useState([{title:"Sample",body:"Sample",date:"Sample"}]);
  
  const { visible, setVisible, bindings } = useModal();
  const   API_URL="http://127.0.0.1:8000/api/"
  
  let handleAdd=function(title,content,duration){
    axios.post(API_URL+"all",{title:title,body:content,date:duration}).then(()=>{updateTasks();});
  }
  let [currentTask,setCurrentTask]=useState();
  let [currentDuration,setCurrentDuration]=useState();
  let handleDelete=function(title){
    axios.get(API_URL+'delete/'+title).then(()=>{updateTasks()});
    
  }

  // let handleStart=function(title,duration){
    
  //   setCurrentTask(title);
  //   setCurrentDuration(duration);
    
    
  //   console.log("Started");
  // }
  
  useEffect(()=>{
    axios.get(API_URL+"all").then(res=>{
      setTasks(res.data)
    })
  },[]);
  const updateTasks=function(){
    axios.get(API_URL+"all").then(res=>{
      setTasks(res.data)
    })

  }

  
  return (
    <div className="App">
    <GeistProvider>
    <CssBaseline />
    <Image width={200} height={200} src="./assets/Capture-removebg-preview.png"/>
    <Spacer y={1}/>
    <Button type="secondary" onClick={()=>{setVisible('true')}}>Add Task</Button>
    <Spacer y={3}/>
    <Grid.Container gap={2} justify="center">
    {/* {tasks.map(function(task){return <Task title={task.title} body={task.body} duration={task.date} handleDelete={handleDelete}></Task>})} */}
    

    </Grid.Container>
    

    
    
      
      
    </GeistProvider>

     <Addtodo visible={visible} setVisible={setVisible} bindings={bindings} handleAdd={handleAdd}/>  
     
    </div>
  );
}

export default App;
