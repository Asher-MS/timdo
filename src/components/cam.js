import { GeistProvider, CssBaseline,Image,Card,Capacity,Badge,Text,Row,Progress,Spacer, Button} from '@geist-ui/react'
import React,{useState} from 'react'
import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';


function Cam(){
    const URL = "https://teachablemachine.withgoogle.com/models/bs8bINSVt/";
    let model, webcam, ctx, labelContainer, maxPredictions;
    const [focusLevel,setFocusLevel]=useState(1);
    const [focusBadge,setFocusBadge]=useState('Focused');

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        // labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            // labelContainer.appendChild(document.createElement("div"));

        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            // const classPrediction =
                // prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            // labelContainer.childNodes[i].innerHTML = classPrediction;
            

        }
        setFocusLevel(prediction[0].probability.toFixed(2));
        if(prediction[0].probability.toFixed(2)<0.5){
            setFocusBadge('Not Focused');
        }else{
            setFocusBadge('Focused');
        }

        // finally draw the poses
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
    
    
    return (
        <Row justify="center">
        <div className="Cam">
            <Row justify='center'>
                <Spacer y={3}/>
            <Text h3>Are you Focused?</Text>
            </Row>
            <Row justify='center'>
            <Button type="secondary" onClick={init}>Start</Button>
            </Row>
            <div><canvas id="canvas"></canvas></div>
            <Spacer y={2}/>
            <Row justify='center'>
            <Badge size="large" type={focusBadge=='Focused'?'secondary':'error'}>{focusBadge}</Badge>
            </Row>
            <Spacer y={2}/>
            <Progress max={1} value={focusLevel} />
         
                
                {/* <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"></script> */}
                

            



    
        </div>
        </Row>



    );



}

export default Cam;