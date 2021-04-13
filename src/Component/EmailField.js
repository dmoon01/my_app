import React from 'react';

function EmailField(props){
    
    function handleChange(e){
        const value = e.target.value;
        props.validChange(value);
        emailValidCheck(value);
    }

    function emailValidCheck(input){
        if(input === ''){
            props.valueChange(false);
        }else if((input.match('@') || []).length === 0){
            props.valueChange(false);
        }else {
            props.valueChange(true);
        }
    }

    function renderEmailValidMessage(input){
        if((props.emailValid === false) && (props.email !=='')){
            return(
                <p> 
                    제대로된 이메일 형식을 입력해 주세요.
                </p>
            );
        }
    }
    return (
            <div>
                <div>
                    <label>
                        Email : <input type='text' value={props.email} onChange={handleChange} placeholder="이메일을 입력하세요."/>
                    </label>
                </div>
                 <div>
                     {renderEmailValidMessage()}
                 </div>
            </div>
        )
};

export default EmailField;