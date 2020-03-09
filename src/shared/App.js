import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, KakaoTalk } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/kakao" component={KakaoTalk}/>
            </div>
        );
    }
}

export default App;