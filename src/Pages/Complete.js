import React from 'react';
import { useSelector } from 'react-redux';;

function Complete (props){
    const {id, name, email, joinTime} = useSelector(state => state.form);
    
    return(
        <div>
            <h1>Welcome {name}! <br/>
                You are now a member of Side Project!🎉</h1>
             <h2>
                 <p>ID : {id}</p>
                 <p>Email : {email}</p>
                 <p> Join Time : {joinTime}</p>
             </h2>
        </div>
    );
}    

export default Complete ;