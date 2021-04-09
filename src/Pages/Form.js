import React from 'react';
import IdField from '../Component/IdField';
import PasswordField from '../Component/PasswordField';
import NameField from '../Component/NameField';
import PhoneNumberField from '../Component/PhoneNumberField';
import Advertisement from '../Component/Advertisement';
import EmailField from '../Component/EmailField';
import { Link } from 'react-router-dom';
import { signUp } from '../Actions/Form';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            pw : '',
            name : '',
            email : '',
            phoneNumber : '',
            allowAd : '',
            joinTime : '',
            idValid : false,
            pwValid : false,
            pwConfirmValid : null,
            nameValid : false,
            emailValid : false,
        };
        this.validChange = this.validChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    validChange(key, value){
        this.setState({[key] : value});
    }

    onSubmit(e){
        e.preventDefault();
        const d = new Date();
        const data = {
            "id" : this.state.id,
            "password" : this.state.pw,
            "name" : this.state.name,
            "phoneAddress" : this.state.phoneNumber,
            "emailAddress" : this.state.email,
            "advertisement" : this.state.allowAd
        }

        fetch('http://ec2-18-188-80-186.us-east-2.compute.amazonaws.com:3000/signup/', {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(response => {
            console.log(response.status);
            if(response.ok) {
                this.validChange('joinTime', d.toLocaleString());
                this.props.signUp(this.state);
                this.props.history.push("/welcome");
            }
            else if(response.status === 400) {
                alert("Please go back!👽")
            }
            else {alert("서버 오류로 회원가입에 실패하였습니다");};
        });
    }

    render(){
        const submitValid = this.state.idValid&&this.state.pwValid&&this.state.nameValid&&this.state.emailValid;
        return(
            <div>
                <div>
                    <h1>About You</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                     <IdField confirmId={this.state.confirmId} id={this.state.id} idValid={this.state.idValid} validChange = {this.validChange} />
                     <PasswordField pw={this.state.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} validChange = {this.validChange}/>
                     <NameField name={this.state.name} nameValid={this.state.nameValid} validChange = {this.validChange} />
                     <PhoneNumberField phoneNumber={this.state.phoneNumber} validChange = {this.validChange} />
                     <EmailField email={this.state.email} emailValid={this.state.emailValid} validChange = {this.validChange} />
                     <Advertisement allowAd={this.state.allowAd} validChange={this.validChange}/>
                    </div>
                <Link to="/welcome"><input type='submit' value='Join' disabled={!submitValid} onClick={this.onSubmit}/></Link>
                </form>
            </div>
            );
        }
    }

const mapStateToProps = state => ({
    id : state.form.id, 
    pw : state.form.pw,
    name : state.form.name,
    email : state.form.email,
    phoneNumber : state.form.phoneNumber,
    allowAd : state.form.allowAd,
    joinTime : state.form.joinTime
});

const mapDispatchToProps = dispatch => ({
    signUp : (userInformation) => {
        dispatch(signUp(userInformation));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);