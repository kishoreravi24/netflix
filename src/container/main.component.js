import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../component/home.component';

class Main extends React.Component{
    render(){
        return(
            <div className="App">
                <Router>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default Main;