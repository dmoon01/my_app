import React from 'react';

class PhoneNumberField extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.validChange('phoneNumber', value);
    
    }
    render () {
        return (
            <div>
                <label>
                    PhoneNumber : <input type = "text" value ={this.props.phoneNumber} onChange={this.handleChange} placeholder="-없이 입력해 주세요." />
                </label>
            </div>
        );
    }
}

export default PhoneNumberField;
