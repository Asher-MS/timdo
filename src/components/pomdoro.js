import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import React,{useState} from 'react'

function Pomdoro(props){
    const [sessionMins,setSessionMins]=useState(5);
    const [breakMins,setBreakMins]=useState(30);
    const [displayMin,setDisplayMin]=useState(0);
    const [displaySec,setDisplaySec]=useState(0);
    let handleStart=function(){
        console.log("Timer Started");
        //Implement the Pomdoro Timer
    }
    let handleStop=function(){
        console.log("TImer Stoped");
        //implement the Stop function
    }



    return(
        <Modal open={props.state} onClose={props.closeHandler}>
        <Modal.Content>
            <Text h3>Pomdoro Timer</Text>
            <Row>
                <Input size='mini'onChange={(e)=>{setSessionMins(e.target.value)}}/>
                <Spacer x={5}/>
                <Input size='mini' onChange={(e)=>{setBreakMins(e.target.value)}}/>
            </Row>
            
            <Row>
                <Text h6>Session</Text>
                <Spacer x={9}/>
                <Text h6>Break</Text>
            </Row>
            <Spacer y={3}/>
            <Row justify="center">
            <Text h3>Session</Text>
            </Row>
            <Row justify="center">
                <Badge><Text h1>{displayMin}:{displaySec}</Text></Badge>

            </Row>
            <Spacer y={3}/>
            <Row>
                <Button type="success" size="small" onClick={handleStart}>Start</Button>
                <Spacer x={4}/>
                <Button type="error" size="small" onClick={handleStop}>Stop</Button>
            </Row>

      </Modal.Content>
      </Modal>




    );
}

export default Pomdoro;