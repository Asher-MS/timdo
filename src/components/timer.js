import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer } from '@geist-ui/react'
import React,{useState} from 'react'



function Timer(props){
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);
    
    let finish_hour=parseInt(props.time.split(":")[0]);
    let finish_minute=parseInt(props.time.split(":")[1]);
    var today=new Date();
    let secs=0;
    secs=(finish_hour*60*60+finish_minute*60)-(today.getHours()*60*60+today.getMinutes()*60);
    console.log(secs);
    var foo=setInterval(function(){
        
        secs=secs-1;
        
        setHours(Math.floor(secs/3600));
        setMinutes(Math.floor((secs%3600)/60));
        
        if(hours===0 && minutes===0){
            clearInterval(foo);
        }
        },1000);
    


    return(
        <div className="Timer">
            <Card hoverable>
            <Text h2>{hours} hours {minutes} minutes</Text>
            </Card>
            


        </div>





    );



}



export default Timer;