import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge, Col } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Note from './Note';
import NoteInput from './NoteInput';


function Notes(props){
    
    const [staten,setStaten]=useState(false);
    const [stateni,setStateNi]=useState(false);
    const handlern=function(){
        setStaten(true);
    }
    const handlerni=function(){
        setStateNi(true);
    }
    const closeHandlern=function(){
        setStaten(false);
    }
    const closeHandlerni=function(){
        setStateNi(false);
    }
    let [email,setUserEmail]=useState(window.localStorage.getItem('email'));
    let [notes,setNotes]=useState([{}]);
    let [currentNote,setCurrentNote]=useState({'title':'title','body':'body'});
    
    let local=true;
    let NOTES_URL=local?"http://127.0.0.1:8000/api/notes?email="+email:"";
    function NoteCard(title,body){
        return (<div><Card shadow>
                    <h4>{title}</h4>
                    <Button onClick={()=>{setStaten(true);setCurrentNote({'title':title,'body':body})}}>View</Button>
                </Card><Spacer y={1}/></div>);
    }
    useEffect(()=>{
        axios.get(NOTES_URL).then((res)=>{
            setNotes(res.data);
        });



    },[]);
    let updateNotes=function(){
        axios.get(NOTES_URL).then((res)=>{
            setNotes(res.data);
        });
    };
    
   
    
    return(
        <div className="Note">
        <GeistProvider>
        <CssBaseline/>
        <Row justify='center'>
        <Text h1>Notes</Text>
        </Row>
        <Row justify='center'>
            <Button type='secondary' onClick={()=>{setStateNi(true)}}>
                Add Note
            </Button>
        </Row>
        <Row justify="center">
        <Text h1>{notes.map((note)=>{return NoteCard(note.title,note.body
            )})}</Text>
        </Row>
        </GeistProvider>
        <Note state={staten} closeHandler={closeHandlern} setState={setStaten} title={currentNote.title} body={currentNote.body}/>
        <NoteInput state={stateni} closeHandler={closeHandlerni} setState={setStateNi} updateNotes={updateNotes}/>
        </div>
    );
}

export default Notes;