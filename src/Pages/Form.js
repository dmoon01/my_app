import React from 'react';
import IdField from '../Component/IdField';
import PasswordField from '../Component/PasswordField';
import NameField from '../Component/NameField';
import EmailField from '../Component/EmailField';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            idValid : false,
            pw : '',
            pwValid : false,
            name : '',
            nameValid : false,
            email : '',
            emailValid : false
        };
    }
    render(){
        return(
            <div>
                <div>
                <h1>회원가입</h1>
                </div>
                <div>
                   <IdField />
                   <PasswordField />
                   <NameField />
                   <EmailField />
                </div>
                <input type='submit' value='회원가입' />
            </div>
            );
        };
    }

export default Form;