import React, {Component} from 'react';
import styles from "./style.module.scss";

class Time extends Component {
    constructor(props) {
        super(props);
            this.state = {time: new Date()};
    }

     currentTime() {
        this.setState({
           time: new Date()
        })
    };

    UNSAFE_componentWillMount() {
        setInterval(() => this.currentTime(), 1000);
    }

    render() {
        return(
            <div className={`${styles.time}`}>
                <span>{this.state.time.toLocaleTimeString()}</span>
            </div>
        )
    }
}

export default Time;
