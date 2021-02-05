import React from 'react'; // 'react'파일을 React라고 부를 것이다. 

class PWLabel extends React.Component {// class라는 그룹핑을 해준다. PWLabel이란 그룹을 만들어서 React의 Component 속성을 적용시키겠다.
    
    constructor(props) { //리액트의 주기에 컨스트럭터. 앱 할 때 제일 먼저 적어준다. props는 변수를 지칭합니다.
        super(props); // 꼭 써줘야 한다. 이유는 몰라?
        this.state = {pw: '', valid: false};//PWLabel 이란 것 === this이고 state를 정의해줘야 한다. 
        this.pwChange = this.pwChange.bind(this);
        this.pwValidCheck = this.pwValidCheck.bind(this);
        this.renderValidMessage = this.renderValidMessage.bind(this);
    }

    pwChange(e) {// e는 event여도 되고 potato 여도 된다. 내가 정하기 나름. 
        this.setState({pw:e.target.value}) //통째로 되어있는거는 중괄호로 묶어준다. dictionary라고 칭함
        this.pwValidCheck(e.target.value)
    }

    pwValidCheck(value) {
        if(value ==='') {
            this.setState({valid: false})
        }
        else if(value ==='dayoung_moon'){
            this.setState({valid: false})
        }
        else {
            this.setState({valid: true})
        }
    }

    renderValidMessage(){
        if((this.state.valid === false) && (this.state.pw !== '')){
            return(
                <div>지원하지 않는 비밀번호입니다</div>
            );
        }

    }
    render() {
        return (//함수가 있을 때 return이 없으면 결과물이 안나옴. 
            <div>
                <label>
                Password : <input type ='text' value={this.state.pw} onChange ={this.pwChange}/> 
            </label>
                {this.renderValidMessage()}
            </div>
            );
    }
    }

export default PWLabel; // 
