import React from 'react';

function PhoneNumberField (props){

    function handleChange(e) {
        const value = e.target.value;
        props.validChange(value);
    
    }
    return (
            <div>
                <label>
                    PhoneNumber : <input type = "text" value ={props.phoneNumber} onChange={handleChange} placeholder="-없이 입력해 주세요." />
                </label>
            </div>
    );
}

export default PhoneNumberField;
