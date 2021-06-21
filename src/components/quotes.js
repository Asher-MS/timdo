import { GeistProvider, CssBaseline,Image,Card,Modal,Input,Textarea,Text,Button,Spacer,Row,Badge } from '@geist-ui/react'
import { imag } from '@tensorflow/tfjs';
import React,{useState,useEffect} from 'react'
import axios from 'axios';


function Quote(props){
    

    const images=["https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    let [image,setImage]=useState(images[0]);
    const [quote,setQuote]=useState("None");
    let updateQuote=function(){
        let quotes=axios.get("https://type.fit/api/quotes").then((res)=>{
            // console.log(res.data);
            setQuote(res.data[Math.floor(Math.random()*200)]);
        })

    }
    useEffect(()=>{
        axios.get("https://type.fit/api/quotes").then((res)=>{
            // console.log(res.data);
            setQuote(res.data[Math.floor(Math.random()*20)]);
        })
    },[])
    
    

    let handleRefresh=function(){
        console.log(image);
        console.log("Refresh");
        let g=Math.floor(Math.random()*images.length);
        console.log(images[g]);
        setImage(images[g]);
        updateQuote();
        

        
    }
    return(
        <Modal open={props.state} onClose={props.closeHandler}>
            <Modal.Content>
            <div style={{ backgroundImage:`url(${image})`}}>
                {/* <Image url={images[0]}></Image> */}
                {/* <img src={image} style={{width:"100%"}}></img> */}
                {/* <div style={{ backgroundImage:`url(${image})`}} style={{width:"1000"}}> 
                    <Text>
                        </Text>
                </div> */}
                <Spacer x={40}/>
                <Row justify="center">
                <Text h2 >"<i>{quote["text"]}</i>"</Text>
                </Row>
                <Row>
                    <Spacer x={10}/>
                    <Text>-{quote["author"]}</Text>

                </Row>
                {/* <Spacer y={10}/> */}

            </div>
            <Spacer y={2}/>
            <Row justify="center">
                
            <Button type="success-light" onClick={handleRefresh}>Refresh</Button>
            </Row>

        </Modal.Content>
        </Modal>

    );
}

export default Quote;
