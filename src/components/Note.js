import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'


function Note(props){
    

    return (
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
                <Row justify='center'>
                <h2>{props.title}</h2>
                </Row>
                <Row justify='center'>
                <Text>{props.body}</Text>
                </Row>
            </Modal.Content>
        </Modal>
    );
}

export default Note;