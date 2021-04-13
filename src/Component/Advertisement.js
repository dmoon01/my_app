import React from 'react';

function Advertisement(props) {
    function handleChange(e){
        const value = e.target.value;
        props.validChange('allowAd', value);
    }
   return (
            <div>
                <p>광고 수신에 동의하십니까?</p>
                <input type = "radio" id = "yes" name="adAccess" value = "yes" onClick = {handleChange} />
                <label for ="yes">Yes</label>
                <input type = "radio" id = "no" name="adAcecess" value ="no" onClick = {handleChange} />
                <label for ="no">No</label>
            </div>
        );    
}

export default Advertisement;