import React, {Fragment} from "react";
import Header from "../Organisms/Header";
import Content from "../Organisms/Content";
import Main from "../Organisms/Main";

export default class Purpose extends React.Component {
    render() {
        return(
            <Fragment>
                <Header/>
                <Main/>
                <Content/>
            </Fragment>
        )
    }
}
