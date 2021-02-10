//complete page와 password confirmation 오류 디버깅이 남았고, 효연이 말대로 과제 완료 이후 기능 개발은 방식은 hooks 사용, 이것저것 읽을 줄 아는 수준으로 기능 코드 수집 정도로 생각해보자
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Complete from './Pages/Complete';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      id :'',
      pw :'',
      name :'',
      email :'',
      joinTime : ''
    };
    this.valueChange=this.valueChange.bind(this);
    }

  valueChange(key, value) {
    this.setState({[key] : value});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/join" component={Form}>
            <Form id={this.state.id} pw={this.state.pw} name={this.state.name} email={this.state.email} joinTime={this.state.joinTime} valueChange={this.valueChange}/>
          </Route>
          <Route path="/welcome">
            <Complete id={this.state.id} name={this.state.name} email={this.state.email} joinTime={this.state.joinTime} />
          </Route>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
