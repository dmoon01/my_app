import React from 'react';

function IdField (props) {
   function handleChange(e) {
        const value = e.target.value;
        props.validChange(value);
        idValidCheck(value);
    }

    function idValidCheck(input) {
        if(input==='') {
            props.valueChange(false);
        }else if(input==='dmoon01'){
            props.valueChange(false);
        }else {
            props.valueChange(true);
        }
    }

    function renderValidMessage(){
        if((props.idValid === false) && (props.id !=='')){
            return(<p>존재하는 ID입니다.</p>)
        } 
    }

        return(
            <div>
                <div>
                    <label>
                        Id : <input type='text' value={props.id} onChange={handleChange} placeholder="ID를 입력하세요"/>
                    </label>
                </div>
                <div>
                    {renderValidMessage()}
                </div>
            </div>
        )

};

export default IdField;