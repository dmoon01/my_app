import { render } from '@testing-library/react';
import React from 'react';

class Complete extends React.Component {
    render() {
        const {name, joinTime} = this.props;
        return(
            <div>
                <h1>Welcome {name}! <br/>
                    You are now a member of Side Project!🎉</h1>
                 <h2>
                    <br/> Join Time : {joinTime}
                 </h2>
            </div>
        );
    }
}      

export default Complete ;