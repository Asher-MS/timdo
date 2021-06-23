import logo from './logo.svg';
import './App.css';
import { GeistProvider, CssBaseline,Image,Card,Grid,Button,Spacer,useModal,Modal,Text,Toggle,Row } from '@geist-ui/react'
import { Sun,Moon } from '@geist-ui/react-icons'

import React,{useState,useEffect} from 'react'
import Task from './components/task'
import Cam from './components/cam';
import Addtodo from './components/AddTodo';
import TaskTimer from './components/TaskTimer';
import Pomdoro from './components/pomdoro';
import axios from 'axios';
import Quote from './components/quotes';
function App() {
  const [themeType,setThemeType]=useState("light");

  let themeChange=function(){
    console.log("Theme Change");
    setThemeType(themeType=="light"?"dark":"light");
  }
  let [tasks,setTasks]=useState([{title:"Sample",body:"Sample",date:"Sample"}]);
  
  const { visible, setVisible, bindings } = useModal();
  const [statep, setStatep] = useState(false);
  const [stateq, setStateq] = useState(false);
  const handler = () => setStatep(true);
  const handlerq=()=>{setStateq(true)};
  const closeHandler = (event) => {
    setStatep(false)
    console.log('closed')
  }
  const closeHandlerq=(event)=>{
    setStateq(false);
    console.log("Closed");
  }
  

  // console.log(setVisible);
  // console.log(useModal());
  // const [visiblep,setVisiblep]=useState(false);
  const   API_URL="https://timdo-api.herokuapp.com/api/"
  
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
    <GeistProvider themeType={themeType}>
    <CssBaseline />
    <Image width={200} height={200} src={themeType=="light"?"./assets/Capture-removebg-preview.png":"./assets/Capture-removebg-preview_darkmode.png"}/>
    <Row justify="center">
    <Row justify="center"> 
    <Text><Toggle onChange={themeChange}/>   Dark mode {themeType=="light"?<Sun/>:<Moon/>}</Text>
    </Row>
    <Spacer y={1}/>
    
    </Row>
    <Spacer y={1}/>
    <Button type="success" onClick={handler}>Pomdoro Timer</Button>
    <Spacer y={1}/>
    <Button type="success-light" onClick={handlerq}>Inspiational Quotes</Button>
    <br/>
    <Spacer y={1}/>

    <Button type="secondary" onClick={()=>{setVisible(true)}}>Add Task</Button>
    <Spacer y={3}/>
    <Grid.Container gap={2} justify="center">
    {tasks.map(function(task){return <Task title={task.title} body={task.body} duration={task.date} handleDelete={handleDelete}></Task>})}
    

    </Grid.Container>
    

    
    
      
      
    </GeistProvider>

     <Addtodo visible={visible} setVisible={setVisible} bindings={bindings} handleAdd={handleAdd}/>  
     <Pomdoro state={statep} closeHandler={closeHandler} setState={setStatep}/>
     <Quote state={stateq} closeHandler={closeHandlerq} setState={setStateq}/>
     
    </div>
  );
}

export default App;
