import React, { useState } from 'react';
import IdField from '../Component/IdField';
import PasswordField from '../Component/PasswordField';
import NameField from '../Component/NameField';
import PhoneNumberField from '../Component/PhoneNumberField';
import Advertisement from '../Component/Advertisement';
import EmailField from '../Component/EmailField';
import { Link } from 'react-router-dom';
import { signUp } from '../Actions/Form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Form (props){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState ('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [allowAd, setAllowAd] = useState('');
    const [idValid, setIdValid] = useState(false);
    const [confirmId, setConfirmId] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwConfirmValid, setPwConfirmValid] = useState(null);
    const [nameValid, setNameValid] = useState (false);
    const [emailValid, setEmailValid] = useState(false);  
    const submitValid = idValid&&pwValid&&nameValid&&emailValid;
    const history = useHistory();
    const dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault();
        const d = new Date();
        const data = {
            "id" : id,
            "password" : pw,
            "name" : name,
            "phoneAddress" : phoneNumber,
            "emailAddress" : email,
            "advertisement" : allowAd
        }
        fetch('http://ec2-18-188-80-186.us-east-2.compute.amazonaws.com:3000/signup/', {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(response => {
            console.log(response.status);
            if(response.status === 400) {
                alert("Please go back!👽");
                return;
            }
            else if(!response.ok){
                alert("서버 오류로 회원가입에 실패하였습니다");    
                return;
            }
            dispatch(signUp({name : name, id : id, email : email, joinTime : d.toLocaleString()}));
            history.push("/welcome"); 
            })
    }
        return (
            <div>
                <div>
                    <h1>About You</h1>
                </div>
                <form>
                    <div>
                     <IdField confirmId={confirmId} id={id} idValid={idValid} validChange = {setId} valueChange ={setIdValid} confirmIdChange = {setConfirmId}/>
                     <PasswordField pw={pw} pwValid={pwValid} pwConfirmValid={pwConfirmValid} validChange = {setPw} valueChange ={setPwValid} confirmPwChange={setPwConfirmValid}/>
                     <NameField name={name} nameValid={nameValid} validChange = {setName} valueChange ={setNameValid}/>
                     <PhoneNumberField phoneNumber={phoneNumber} validChange = {setPhoneNumber} />
                     <EmailField email={email} emailValid={emailValid} validChange = {setEmail} valueChange={setEmailValid}/>
                     <Advertisement allowAd={allowAd} validChange={setAllowAd}/>
                    </div>
                <Link to="/welcome"><input type='submit' value='Join' disabled={!submitValid} onClick={onSubmit}/></Link>
                </form>
            </div>
        )
    }


export default Form;