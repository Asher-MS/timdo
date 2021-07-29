import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge, Col } from '@geist-ui/react'
import { image } from '@tensorflow/tfjs';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ArrowRightCircle,ArrowLeftCircle } from '@geist-ui/react-icons'




function Music(props){
    let playlists={
        "lofi":"https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM",
        "ambient":"https://open.spotify.com/embed/playlist/1kqBP6eE24L0agNpnTIKtc",
        "study":"https://open.spotify.com/embed/playlist/471N195f5jAVs086lzYglw",
        "threeam":"https://open.spotify.com/embed/album/7rrt4vAwMsCDl5cIbn7NJA"
    }
    const [playUrl,setPlayUrl]=useState(0);
    let urls=Object.keys(playlists);
    let changeUrlplus=function(){
        setPlayUrl((playUrl+1)%(Object.keys(playlists).length));
    }
    let changeUrlminus=function(){
        if(playUrl-1<0){
            setPlayUrl(Object.keys(playlists).length-1)
        }else{
            setPlayUrl(playUrl-1);
        }

    }


    return(
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
                <div>
                    <Row>
                    <Col>
                    <Badge onClick={changeUrlminus}>Previous</Badge>
                    <ArrowLeftCircle onClick={changeUrlminus}/>
                    </Col>
                    <Spacer x={13}/>
                    <Col align='center'>
                    <Badge onClick={changeUrlplus}>Next</Badge>
                    
                    <ArrowRightCircle onClick={changeUrlplus}/>
                    </Col>
                    
                    </Row>
                    <Spacer y={2}/>
                    <iframe src={playlists[urls[playUrl]]} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>



                </div>
        </Modal.Content>
        </Modal>
    );
}

export default Music;