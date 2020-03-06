import React, {Component, Fragment} from 'react';
import './index.css';
import Purpose from "./Components/Purpose";
import About from "./Components/About";
import Shop from "./Components/Shop";
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Purpose}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
