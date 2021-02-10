import React from 'react';

class EmailField extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.emailValidCheck=this.emailValidCheck.bind(this);
        this.renderEmailValidMessage=this.renderEmailValidMessage.bind(this);
    }
    handleChange(e){
        const value = e.target.value;
        this.props.valueChange('email', value);
        this.emailValidCheck(value);
    }

    emailValidCheck(input){
        if(input === ''){
            this.props.validChange('emailValid', false);
        }else if((input.match('@') || []).length === 0){
            this.props.validChange('emailValid', false);
        }else {
            this.props.validChange('emailValid', true);
        }
    }

    renderEmailValidMessage(input){
        if((this.props.emailValid === false) && (this.props.email !=='')){
            return(
                <p> 
                    제대로된 이메일 형식을 입력해 주세요.
                </p>
            )
        }
    }
    render(){
        return (
            <div>
                <div>
                    <label>
                        Email : <input type='text' value={this.props.email} onChange={this.handleChange} placeholder="이메일을 입력하세요."/>
                    </label>
                </div>
                 <div>
                     {this.renderEmailValidMessage()}
                 </div>
            </div>
        )
    };
};

export default EmailField;