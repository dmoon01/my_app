import React from 'react';

class Advertisement extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const value = e.target.value;
        this.props.validChange('allowAd', value);
    }
    render(){
        return (
            <div>
                <p>광고 수신에 동의하십니까?</p>
                <input type = "radio" id = "yes" name="adAccess" value = "yes" onClick = {this.handleChange} />
                <label for ="yes">Yes</label>
                <input type = "radio" id = "no" name="adAcecess" value ="no" onClick = {this.handleChange} />
                <label for ="no">No</label>
            </div>
        );    
    }
}

export default Advertisement;