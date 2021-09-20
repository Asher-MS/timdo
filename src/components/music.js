import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge, Col } from '@geist-ui/react'
import { image } from '@tensorflow/tfjs';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ArrowRightCircle,ArrowLeftCircle } from '@geist-ui/react-icons'




function Music(props){
    let playlists={
        "lofi":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1035841942&color=%23302f22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "lofi2":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/890621617&color=%23302f22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "lofi3":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/859871056&color=%23302f22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "lofi4":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/966761764&color=%23302f22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "lofi5":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106398864&color=%23302f22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                    <iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src={playlists[urls[playUrl]]}></iframe>
                    
                    
                    {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lofi_girl" title="Lofi Girl" target="_blank" style="color: #cccccc; text-decoration: none;">Lofi Girl</a> · <a href="https://soundcloud.com/lofi_girl/4-am-studysession" title="4 A.M Study Session 📚 - [lofi hip hop/chill beats]" target="_blank" style="color: #cccccc; text-decoration: none;">4 A.M Study Session 📚 - [lofi hip hop/chill beats]</a></div> */}



                </div>
        </Modal.Content>
        </Modal>
    );
}

export default Music;