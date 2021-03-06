import React from 'react';

class NameLabel extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: '', validation: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    <label>
                        Name : <input type='text' value={this.state.value} onChange={this.handleChange} placeholder="이름을 입력하세요."/>
                    </label>
                </div>
            </div>
        );
    }
}

export default NameLabel;
