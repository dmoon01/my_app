import React from 'react';

class IdField extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.idValidCheck = this.idValidCheck.bind(this);
        this.renderValidMessage =this.renderValidMessage.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.validChange('id', value);
        this.idValidCheck(value);
    }

    idValidCheck(input) {
        if(input==='') {
            this.props.validChange('idValid', false);
        }else if(input==='dmoon01'){
            this.props.validChange('idValid', false);
        }else {
            this.props.validChange('idValid', true);
        }
    }

    renderValidMessage(){
        if((this.props.idValid === false) && (this.props.id !=='')){
            return(<p>존재하는 ID입니다.</p>)
        } 
    }

    render(){
        return(
            <div>
                <div>
                    <label>
                        Id : <input type='text' value={this.props.id} onChange={this.handleChange} placeholder="ID를 입력하세요"/>
                    </label>
                </div>
                <div>
                    {this.renderValidMessage()}
                </div>
            </div>
        )
    };
};

export default IdField;