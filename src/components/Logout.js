import React,{useState,useEffect} from 'react' 
import { GoogleLogout } from 'react-google-login'

const clientId="89388908397-fjpa865icojhk5tpfcr064e0msqbk09v.apps.googleusercontent.com";




function Logout(props){

    const onSuccess=()=>{
        console.log("Logged Out Succesfully");
        props.setCurrentUser('');
    }



    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}

            />

        </div>
    );
}


export default Logout;