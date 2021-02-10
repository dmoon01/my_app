import React from 'react';
import IdField from '../Component/IdField';
import PasswordField from '../Component/PasswordField';
import NameField from '../Component/NameField';
import EmailField from '../Component/EmailField';
import {Link} from 'react-router-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idValid : false,
            pwValid : false,
            pwConfirmValid : null,
            nameValid : false,
            emailValid : false
        };
        this.validChange = this.validChange.bind(this);
        this.recordTime=this.recordTime.bind(this);
    }

    validChange(key, value){
        this.setState({[key] : value});
    }

    recordTime(){
        const d = new Date();
        this.props.valueChange('joinTime', d.toLocaleString());
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
                     <IdField id={this.props.id} idValid={this.state.idValid} validChange = {this.validChange} valueChange ={this.props.valueChange}/>
                     <PasswordField pw={this.props.pw} pwValid={this.state.pwValid} pwConfirmValid={this.state.pwConfirmValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
                     <NameField name={this.props.name} nameValid={this.state.nameValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
                     <EmailField email={this.props.email} emailValid={this.state.emailValid} validChange = {this.validChange} valueChange = {this.props.valueChange}/>
                    </div>
                <Link to="/welcome"><input type='submit' value='Join' disabled={!submitValid} onClick={this.recordTime}/></Link>
                </form>
            </div>
            );
        };
    }

export default Form;