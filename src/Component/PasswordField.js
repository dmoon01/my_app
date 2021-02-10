// function component로 바꾸기. 바꾸면서 password reveal toggle button 만들어보기 useState with Hooks
//const[pwd, setPwd] = useState('');
//const[isRevealPwd, setIsRevealPwd] =useState(false);
import React from 'react';

class PasswordField extends React.Component{
    constructor(props){
        super(props);
        this.pwChange=this.pwChange.bind(this);
        this.pwValidCheck=this.pwValidCheck.bind(this);
        this.pwConfirmValidCheck=this.pwConfirmValidCheck.bind(this);
        this.renderValidMessage=this.renderValidMessage.bind(this);
        this.renderPwValidMessage=this.renderPwValidMessage.bind(this);
    }

    pwChange(e){
    
        const value = e.target.value;
        this.props.valueChange('pw', value);
        this.pwValidCheck(value);
    }

    pwValidCheck(input){
        if(input===''){
            this.props.validChange('pwValid', false);
        }else if (input.length < 8) {
            this.props.validChange('pwValid', false);
        }else {
            this.props.validChange('pwValid', true);
        }
    }


    pwConfirmValidCheck(e){
        const value = e.target.value;
        if(value === '') {
            this.props.validChange('pwConfirmValid', null);
        } else if(value === this.props.pw){
            this.props.validChange('pwConfirmValid', true);
        } else {
            this.props.validChange('pwConfirmValid', false);
        }
    }


    renderValidMessage(value, valid){
        if(value !== ''){
            if(valid === true) {
                return('✔️');
            } else {
                return('❎');
            }
        }
    }

    renderPwValidMessage(){
        if(this.props.pwConfirmValid !== null) {
                if(this.props.pwConfirmValid === true) {
                    return('✔️');
                }else { 
                    return('❎');
                }
            }
        }

    render(){
        return(
            <div>
                <div>
                    <label>
                        Password : <input type = 'password' value={this.props.pw} onChange={this.pwChange} placeholder="비밀번호를 입력하세요." />
                    </label>
                </div>
                <div>
                    {this.renderValidMessage(this.props.pw, this.props.pwValid)}
                </div>
                <div>
                    <label>
                        Password Confirmation : <input type = 'password' onChange={this.pwConfirmValidCheck} placeholder="비밀번호를 재입력하세요."/>
                    </label>           
                </div>
                <div>
                    {this.renderPwValidMessage()}
                </div>
            </div>
        );
    }
}

export default PasswordField;