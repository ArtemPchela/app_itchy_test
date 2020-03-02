import React from "react";
import NavMobile from "../Molecules/NavMobile";
import Nav from "../Molecules/Nav";
import links from "../../links";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";

export default class Shop extends React.Component {
    render() {
        return(
            <div className={`${styles.wrapper_nav}`}>
                <Link className={`${styles.wrapper_logo_text}`} to="/">
                    itchy
                </Link>
                <Nav  links={links}/>
                <NavMobile links={links}/>
            </div>
        )
    }
}
