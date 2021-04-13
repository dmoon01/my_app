// function component로 바꾸기. 바꾸면서 useState with Hooks
//const[pwd, setPwd] = useState('');
//const[isRevealPwd, setIsRevealPwd] =useState(false);
import React, { useState } from 'react';

function PasswordField(props){
    const [hidden,setHidden] = useState(true);
    
    function pwChange(e){
        const value = e.target.value;
        props.validChange(value);
        pwValidCheck(value);
    }

    function pwValidCheck(input){
        if(input===''){
            props.valueChange(false);
        }else if (input.length < 8) {
            props.valueChange(false);
        }else {
            props.valueChange(true);
        }
    }

    function pwConfirmValidCheck(e){
        const value = e.target.value;
        if(value === '') {
            props.valuehange(null);
        } else if(value === props.pw){
            props.valueChange(true);
        } else {
            props.valueChange(false);
        }
    }


    function renderValidMessage(value, valid){
        if(value !== ''){
            if(valid === true) {
                return('✔️');
            } else {
                return('❎');
            }
        }
    }

    function renderPwValidMessage(){
        if(props.pwConfirmValid !== null) {
             if(props.pwConfirmValid === true) {
                return('✔️');
            }   else { 
                 return('❎');
            }
        }
    }

    function toggleShow(e){
        e.preventDefault();
        setHidden({hidden: !hidden});
    }
    
        return(
            <div>
                <div>
                    <label>
                        Password : <input type = {hidden ? 'password' :'text'} value={props.pw} onChange={pwChange} placeholder="비밀번호를 입력하세요." />
                        <button onClick={toggleShow}>👀</button>
                    </label>
                </div>
                <div>
                    {renderValidMessage(props.pw, props.pwValid)}
                </div>
                <div>
                    <label>
                        Password Confirmation : <input type = {hidden ? 'password' :'text'} onChange={pwConfirmValidCheck} placeholder="비밀번호를 재입력하세요."/>
                        <button onClick={toggleShow}>👀</button>
                    </label>           
                </div>
                <div>
                    {renderPwValidMessage(props.pwConfirmValid, props.pwConfirmValidCheck)}
                </div>
            </div>
        );
}

export default PasswordField;