import React from 'react';

function NameField(props) {

    function handleChange(e) {
        const value = e.target.value;
        props.validChange(value);
        nameValidCheck(value);
    }

    function nameValidCheck(input) {
        if(input ===''){
            props.valueChange(false);
        }else {
            props.valueChange(true);
        }
    }
    return (
        <div>
            <div>
                <label>
                    Name : <input type='text' value={props.name} onChange={handleChange} placeholder="이름을 입력하세요."/>
                </label>
            </div>
        </div>
    );
}


export default NameField;
