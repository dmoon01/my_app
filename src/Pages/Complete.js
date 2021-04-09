import React from 'react';
import { connect } from 'react-redux';

class Complete extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome {this.props.name}! <br/>
                    You are now a member of Side Project!🎉</h1>
                 <h2>
                    <br/> Join Time : {this.props.joinTime}
                 </h2>
            </div>
        );
    }
}      

const mapStateToProps = state => ({
    id : state.form.id,
    pw : state.form.pw,
    name : state.form.name,
    phonoeNumber :state.form.phonoeNumber,
    email : state.form.email,
    joinTime : state.form.joinTime
})

export default connect(mapStateToProps)(Complete) ;