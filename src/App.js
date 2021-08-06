import logo from './logo.svg';
import './App.css';
import { GeistProvider, CssBaseline,Image,Card,Grid,Button,Spacer,useModal,Modal,Text,Toggle,Row } from '@geist-ui/react'
import { Sun,Moon } from '@geist-ui/react-icons'

import React,{useState,useEffect} from 'react'
import Task from './components/task'

import Addtodo from './components/AddTodo';

import Pomdoro from './components/pomdoro';
import axios from 'axios';
import Quote from './components/quotes';
import Music from './components/music';
import SpeedReader from './components/SpeedReader';
import Login from './components/Login';
import Logout from './components/Logout';
import './note.css';



function NoTask(){
  return(
    <div>
    <Text h1>No Task!!!!</Text>
    <Image src="https://media.giphy.com/media/Qg6cn9VrzNNKg/giphy.gif"></Image>
    </div>
  );
}

function App() {
  // let fullscreen=function(){
  //   // if(document.body.fullscreen==true){
  //   // document.body.requestFullscreen();
  //   // }else{
  //   //   document.body.exitFullscreen();
  //   // }
  //   // console.log(document.fullscreen)
  //   console.log(document.fullscreenElement);
  //   if(document.fullscreenElement){
  //   document.body.requestFullscreen();
  //   }
  // }
  
  const [themeType,setThemeType]=useState("light");
  const [userIp,setUserIp]=useState('');
  const [currentUser,setCurrentUser]=useState('');
  const [profilePic,setProfilePic]=useState('');
  useEffect(()=>{
    axios.get("https://api.ipify.org/?format=json").then((res)=>{
      
      setUserIp(res.data['ip']);
      
      

    })
  },[]);
  

  let themeChange=function(){
    console.log("Theme Change");
    setThemeType(themeType=="light"?"dark":"light");
  }
  
  let [tasks,setTasks]=useState([{title:"Sample",body:"Sample",date:"Sample"}]);
  
  const { visible, setVisible, bindings } = useModal();
  const [statep, setStatep] = useState(false);
  const [stateq, setStateq] = useState(false);
  const [statem,setStatem]=useState(false);
  const [states,setStates]=useState(false);
  const handler = () => setStatep(true);
  const handlerq=()=>{setStateq(true)};
  const handlerm=()=>{setStatem(true)};
  const handlers=()=>{setStates(true)};
  const closeHandler = (event) => {
    setStatep(false)
    console.log('closed')
  }
  
  const closeHandlerq=(event)=>{
    setStateq(false);
    console.log("Closed");
  }
  const closeHandlerm=()=>{
    setStatem(false);
    console.log("Music Closed");
  }
  const closeHandlers=()=>{
    setStates(false);
  }
  

  
  const   API_URL="https://timdo-api.herokuapp.com/api/"
  // const API_URL="http://127.0.0.1:8000/api/"
  
  let handleAdd=function(title,content,duration,email){
    
    
    axios.post(API_URL+"all",{title:title,body:content,date:duration,email:email}).then(()=>{updateTasks();});
    setVisible(false);

  }
  let [currentTask,setCurrentTask]=useState();
  let [currentDuration,setCurrentDuration]=useState();
  let handleDelete=function(title){
    axios.get(API_URL+'delete/'+title).then(()=>{updateTasks()});
    
  }
  // let testUser=setInterval(()=>{console.log(currentUser)},3000);
  
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
    <Row justify='center'>
    <Image width={200} height={200} src={themeType=="light"?"./assets/Capture-removebg-preview.png":"./assets/Capture-removebg-preview_darkmode.png"}/>
    </Row>
    <Row justify='center'>
      {currentUser==''?<Login setCurrentUser={setCurrentUser} setProfilePic={setProfilePic}/>:<Image src={profilePic}/>}
      <Spacer x={1}/>
      {currentUser==''?<Text
      
      
      />:<Logout setCurrentUser={setCurrentUser} setProfilePic={setProfilePic}/>}

    </Row>
    
    
    <Row justify="center">
    <Row justify="center"> 
    <Text><Toggle onChange={themeChange}/>   Dark mode {themeType=="light"?<Sun/>:<Moon/>}</Text>
    </Row>
    {/* <Button onClick={fullscreen}>Full</Button> */}
    
    </Row>
    
    <Row justify='center'>
    <Button type="success-light" onClick={handlerq}>Inspiational Quotes</Button>
    <Spacer x={1}/>
    
    <Button type="success" onClick={handler}>Pomdoro Timer</Button>
   
    <Spacer x={1}/>
    <Button type="success-light" onClick={handlerm}>Music</Button>
    
    
   
    
    </Row>
    <Spacer y={1}/>
    <Row justify='center'>
    <Button type='success-light' onClick={handlers}>Speed reading</Button>

    </Row>
    <Spacer y={1}/>
    <Row justify='center'>
    <Button type="secondary" onClick={()=>{setVisible(true)}}>Add Task</Button>
    </Row>
    <Spacer y={3}/>
    <div>
       
     <div class="ruled-paper" role="main">
      <div class="ruled-paper-header"></div>
      <div class="ruled-paper-body" contenteditable>
        Hello world
      </div>
      </div>

     </div>
    <Grid.Container gap={2} justify="center">
    {tasks.length==0?NoTask():(tasks.filter((task)=>{return task.email==currentUser}).map(function(task){return <Grid xs={6}><Task title={task.title} body={task.body} duration={task.date} ip={task.ip} handleDelete={handleDelete}></Task></Grid>}))}
    </Grid.Container>

    </GeistProvider>

     <Addtodo visible={visible} setVisible={setVisible} bindings={bindings} handleAdd={handleAdd} user={currentUser}/>  
     <Pomdoro state={statep} closeHandler={closeHandler} setState={setStatep}/>
     <Quote state={stateq} closeHandler={closeHandlerq} setState={setStateq}/>
     <Music state={statem} closeHandler={closeHandlerm} setState={setStatem}/>
     <SpeedReader state={states} closeHandler={closeHandlers} setState={setStates}/>
     
     
    </div>
  );
}

export default App;
