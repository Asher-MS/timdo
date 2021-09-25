import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import axios from 'axios';
import React,{useState,useEffect} from 'react'


function NoteInput(props){

    let [title,setTitle]=useState('');
    let [body,setBody]=useState('');
    let local=true;
    let NOTES_URL=local?"http://127.0.0.1:8000/api/notes/all":"";
    function handleAdd(title,body){
        let email=window.localStorage.getItem('email');
        axios.post(NOTES_URL,{'title':title,'body':body,'email':email}).then(()=>{props.closeHandler();props.updateNotes();})
    }

    return(
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
            <Row justify='center'>
                <Text h3>
                    Title
                </Text>
            </Row>
            <Row justify='center'>
            <Input placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            </Row>
            <Spacer y={2}/>
            <Row justify='center'>
                <Text h3>
                    Body
                </Text>
            </Row>
            <Row justify='center'>
            <Input placeholder="body" width="300px" height="500px" onChange={(e)=>{setBody(e.target.value)}}/>
            </Row>
            <Spacer y={2}/>
            <Row justify='center'>
                <Button type='secondary' onClick={()=>{handleAdd(title,body)}}>Add</Button>
            </Row>
            </Modal.Content>
        </Modal>
        
    );

    
}

export default NoteInput;