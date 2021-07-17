import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer, Row,Col } from '@geist-ui/react'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Play,Pause,PlayFill,PauseFill, Columns } from '@geist-ui/react-icons'


function SpeedReader(props){

    let [currentWord,setCurrentWord]=useState("Test");
    let [isPlaying,setPlaying]=useState(false);
    let [matter,setMatter]=useState("Speed reading is an effective way to increase your learning speed");
    let play=function(){
        setPlaying(!isPlaying);


    }




    return(

        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
            <Row justify='center'>
               
            <Text h2>Speed Reader</Text>
            </Row> 
            <Card hoverable>
            <Row justify='center'>
            <Text>{currentWord}</Text>
            </Row>
            </Card>
            <Spacer y={1}/>
            <Row justify='center'>
                {isPlaying?<Pause onClick={play}/>:<Play onClick={play}/>}

            </Row>
            <Spacer y={1}/>
            <Col>
            <Text h6>Enter the text to read here</Text>
            <Textarea width="100%" placeholder="Speed reading is an effective way to increase your learning speed" onChange={(e)=>{setMatter(e.target.value)}}/>
            </Col>
            
       
            
                  
            </Modal.Content>
        </Modal>



    );
}

export default SpeedReader;