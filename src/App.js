//complete page와 password confirmation 오류 디버깅이 남았고, 효연이 말대로 과제 완료 이후 기능 개발은 방식은 hooks 사용, 이것저것 읽을 줄 아는 수준으로 기능 코드 수집 정도로 생각해보자
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Complete from './Pages/Complete';

class App extends React.Component{
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/join" component={Form}/>
          <Route path="/welcome" component={Complete}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
