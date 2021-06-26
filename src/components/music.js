import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import { image } from '@tensorflow/tfjs';
import React,{useState,useEffect} from 'react'
import axios from 'axios';


function Music(props){


    return(
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
                <div>
            
                    <iframe src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>



                </div>
        </Modal.Content>
        </Modal>
    );
}

export default Music;