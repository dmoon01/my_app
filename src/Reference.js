import React from 'react';
import IDLabel from '../Component/IdField';
import PWLabel from '../Component/PasswordField';
import ValidLabel from '../Component/ValidLabel';
import NameLabel from '../Component/NameField';
import EmailLabel from '../Component/EmailField';

//순서 : 큰 그림 부터 1) 꼭 필요한 컴포넌트 부터 2) 큰 와꾸 
//파일 생성 : 1)pages 2) Component 만들구 
//팁 : 완전히 다 만들고 돌려보는 건 어렵기 때무넹, 조금씩 조금씩 만들어서 계속 돌려보고 2) console.log()로 돌려본다

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            idValid : false,
            pwValid : false,
            pwConfirmValid : null,
            nameValid : false,
            emailValid : false
        }
        this.validChange = this.validChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    validChange(key, value){
        this.setState({[key] : value});
    }
    submitData(e) {
        e.preventDefault();
        const date = new Date();
        alert(
            "id :" + this.props.id + "\n" +
            "password :" + this.props.pw + "\n" +
            "name :" + this.props.name + "\n" +
            "emailAddress :" + this.props.email + "\n" 
        )
    }
    render() {
        const submitValid = (this.state.id === this.state.confirmId) && this.state.idValid && this.state.pwValid && this.state.pwConfirmValid && this.state.nameValid && this.state.emailValid;
        return(
            <div>
                <div>
                <h1>회원가입</h1>
                </div>
                <form>
                    <div> 
                    <IDLabel confirmId={this.state.confirmId} id={this.state.id} idValid={this.state.idValid} validChange={this.validChange} valueChange={this.props.valueChange}/>
                    <PWLabel />
                    <ValidLabel />
                    <NameLabel />
                    <EmailLabel />      
                    </div>
                    <input type ='submit' disabled = {!submitValid} onClick = {this.submitData} />
                </form>
            </div>   
            );
    }
}

export default Form;