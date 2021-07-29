import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge,Progress } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'

function Pomdoro(props){
    const [sessionMins,setSessionMins]=useState(25);
    const [breakMins,setBreakMins]=useState(5);
    const [displayMin,setDisplayMin]=useState(0);
    const [displaySec,setDisplaySec]=useState(0);
    const [running,setRunning]=useState();
    const [progress,setProgress]=useState(0);
    const [progressType,setProgressType]=useState('secondary');
    let [currentActivity,setCurrentActivity]=useState('session');
    let curract='session';
    const [badgeType,setBadgeType]=useState('secondary')
    
    let duration=sessionMins*60;
    let totalduration=duration;
    const [session,setSession]=useState(1);
    let setDisplay=function(sec){
        if(sec==1){
            changeActivity();        
        }
        setDisplayMin(Math.floor(sec/60));
        setDisplaySec(sec%60);
        console.log(sec);
    }
    
    
    
    let changeActivity=function(){
        if(curract=='session'){
            setProgressType('success')
            setCurrentActivity('break');
            curract='break';
            setBadgeType('success');
            setSession(session+1);
            duration=breakMins*60;
            totalduration=duration;
        }else{
            setProgressType('secondary');
            setCurrentActivity('session');
            curract='session';
            setBadgeType('secondary');
            duration=sessionMins*60;
            totalduration=duration;

            
        }
        
        
    }
    let loop1;
    let handleStart=function(){
        console.log("Timer Started");
        setRunning(true);
        
        
       
    
       window.loop1=setInterval(()=>{
            if(running==false){
                clearInterval(loop1);
            }
            setDisplay(duration);
            duration=duration-1;
            setProgress(duration);
            console.log(currentActivity);
        },1000);

        //Implement the Pomdoro Timer
    }
    let handleStop=function(){
        console.log("TImer Stoped");
        setRunning(false);
        clearInterval(window.loop1);
        duration=0;
        setDisplay(0);
        //implement the Stop function
    }



    return(
        <Modal open={props.state} onClose={props.closeHandler}>
        <Modal.Content>
            <Text h3>Pomdoro Timer</Text>
            <Row>
                <Input size='mini' placeholder={25} onChange={(e)=>{setSessionMins(e.target.value)}}/>
                <Spacer x={5}/>
                <Input size='mini' placeholder={5} onChange={(e)=>{setBreakMins(e.target.value)}}/>
            </Row>
            
            <Row>
                <Text h6>Session</Text>
                <Spacer x={9}/>
                <Text h6>Break</Text>
            </Row>
            <Spacer y={3}/>
            <Row justify="center">
            <Text h2>{currentActivity}{currentActivity=='session'?session:""}</Text>
            </Row>
            <Row justify="center">
                <Badge type={badgeType}><Text h1>{displayMin}:{displaySec}</Text></Badge>

            </Row>
            <Spacer y={3}/>
            <Progress type={progressType} value={progress} max={totalduration}/>
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