import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row } from '@geist-ui/react'
import React,{useState} from 'react'
import Timer from './timer';
import Cam from './cam';

function TaskTimer(props){
function stopWebcam(){
  props.setVisible(false);
  window.location.reload();
 
}
return (
    <Modal {...props.bindings}>
        <Modal.Title>Timer</Modal.Title>
        
        <Modal.Content>
          <Row justify="center"> 
          <Card hoverable> <Row justify="center"><Text h3>{props.content}</Text></Row></Card>
         
         
          </Row>
          <Row justify="center">
          <Text h3>{props.date}</Text>
          </Row>
          <Spacer x={4}/>
          <Text h4>You have </Text>
          <Row justify='center'>
         
          <Timer time={props.date}></Timer>
          
          </Row>
         
          <Spacer y={1}/>
          <Cam></Cam>
          <Spacer y={3}/>
          <Row justify='center'>
          <Button type='error-light' onClick={stopWebcam}>Stop</Button>
          </Row>
        </Modal.Content>
        
      </Modal>




);
}
export default TaskTimer;
