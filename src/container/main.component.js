import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Credential from '../component/credential/credential.component';
import Home from '../component/home.component';
import MainPage from '../component/start.component';

class Main extends React.Component{
    render(){
        return(
            <div className="App">
                <Router>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/login1">
                        <Credential/>
                    </Route>
                    <Route exact path="/login">
                        <Home/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default Main;