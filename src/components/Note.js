import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'
var showdown  = require('showdown');

function Note(props){
    let converter=new showdown.Converter();
    let body=converter.makeHtml(props.body);

    return (
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
                <Row justify='center'>
                <h2>{props.title}</h2>
                </Row>
                <Row justify='center'>
                <span dangerouslySetInnerHTML={{__html: body}} />
                </Row>
            </Modal.Content>
        </Modal>
    );
}

export default Note;