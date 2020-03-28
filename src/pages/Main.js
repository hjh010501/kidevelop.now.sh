import React from 'react';
import './scss/main.scss';
import Background from '../components/background';
import Card from '../components/card';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Background></Background>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                    <Card></Card>
                </div>
            </div>
        );
    }
  }

  export default Main;