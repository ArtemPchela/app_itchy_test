import React, {Component, Fragment} from 'react';
import './index.css';
import Purpose from "./Components/Purpose";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Content from "./Components/Organisms/Content";
import { Route, Switch} from 'react-router-dom';

import Header from "./Components/Organisms/Header";

class App extends Component {
    render() {
        return (
            <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Content} />
                        <Route exact path="/purpose" component={Purpose} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/shop" component={Shop} />
                    </Switch>
            </Fragment>
        );
    }
}

export default App;
