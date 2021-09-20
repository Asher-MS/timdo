import React,{useState,useEffect} from 'react'
import {GoogleLogin} from 'react-google-login';





const clientId="89388908397-fjpa865icojhk5tpfcr064e0msqbk09v.apps.googleusercontent.com";

function Login(props){
    // Login Success
    const onSuccess=(res)=>{
        // console.log("Login Successfull Current User:",res.profileObj);
        console.log("Login sucessfull")
        props.setCurrentUser(res.profileObj['email']);
        props.setProfilePic(res.profileObj["imageUrl"])
    }
    // Login Failed
    const onFailure=(res)=>{
        console.log("Login Failed ",res);
    }





    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop:'100px'}}
                isSignedIn={true}

            />

        </div>


    );
}

export default Login;

